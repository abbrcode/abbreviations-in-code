#!/usr/bin/perl
# 
# Perl script to generate a json abbriviation file from README.md 
#  Usage in a Bash shell: ./scripts/genJson.pl > ./data/abbr.json
#
use warnings;
use strict;

my $filename = '.\README.md';
my $counter  = 0;
my @jsonArr  = ();
sub  trim { my $s = shift; $s =~ s/^\s+|\s+$//g; return $s };

open(FH, '<', $filename) or die $!;

print "{\n" . '"abbreviations":' . "[\n";

while(<FH>){
    ++$counter;
    next if ( $_ =~ m/(~~)/);
    if ( $counter > 40 ) {
        if ( $_ =~ /-[ \t]/ ) {
            my ( $abbr, $desc) = ($_ =~ m/\*\*([^*]*)\*\*[ \t]*([^\(_~]+)/);
            my $domain= "generic";
            if ( $_ =~ m/^-[ \t]*(_)[ \t]*\*\*/) { $domain = "specific"; }

            my $comment    = "";
            my $example    = "";
            my $constraint = "";
            if ($_ =~ m/\(([^\)]+)\)/) { $comment = $1; }
            if (length($comment) > 0) {
                if ( $comment =~ m/^([^,]+),(.*)$/ ) {
                    $domain = trim($1);
                    $comment = trim($2)
                }
                if ( $comment =~  m/^e\.g\.(.*)/ ) { 
                    $example = trim($1); 
                }
                elsif ( $comment =~  m/^(only[ \t].*)/ ) {
                    $constraint = trim($1);
                }
            }


            my @abbrArr = split('/', $abbr);
            my @descArr = split('/', $desc);
            foreach my $ab (@abbrArr) {
                foreach my $ds (@descArr) {
                    push(@jsonArr, "    {\n        " 
                        . '"abbr": "'    . trim($ab) . '", ' 
                        . "\n        " 
                        . '"desc": "'    . trim($ds) . '", ' 
                        . "\n        " 
                        . '"domain": "'   . $domain . '", '
                        . "\n        " 
                        . '"constraint": "' . $constraint . '",'
                        . "\n        " 
                        . '"example": "' . $example . '"'
                        . "\n    },");
                }
            }
        }
    }
}
my $lastEntry = pop(@jsonArr);
chop($lastEntry);
push(@jsonArr, $lastEntry);
print join("\n", @jsonArr),  "\n]}\n";
close(FH);