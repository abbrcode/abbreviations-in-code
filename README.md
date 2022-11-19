# Abbreviations in program codes

Here is a list of **common**, **standard** and **well-known** abbreviations which you can find in software code.

A good abbreviation is:

-  **global** • understood by all developers
-  **clear** • if seen for the first time you still know what it means (good: _arg_ for _argument_ | bad: _nl_ for _name_list_)
-  **short** • taking out one letter is not a real abbreviation (good: _doc_ for _document_ | bad: _cpy_ for _copy_)
-  **non-context sensitive** • like _r_ for radius is straightforward only if you speak about circles

## Goal

Giving good names to variables, functions, classes, files etc. can be a hard task. Long names (e.g. number_of_connected_clients) are always clear, but need extra time to read, take up line space and are harder to remember. Therefore choosing a shorter form if possible is advisable, whilst being careful to keep names meaningful and clear.

Keep in mind that as your scope is getting bigger (from very local to API) you should choose more descriptive names. For example _res_ is good to check the result of something in the next line. However if it's a global variable then _log_save_res_ is more appropriate.

When speaking about APIs then establish a pattern of naming.
For example in C: `namespace + module + action + object` (e.g. gui_label_set_text)

If you are using the abbreviations below your naming will become more coherent, logical and understandable to other (even novice) programmers.

## Guide

Use the _context sensitive_ (italic) abbreviations only in their right context.
Avoid the ~~not recommended~~ (strike through) abbreviations because they are not clear or useless.

Of course, you can consider using the not recommended ones. For example why not use _txt_ instead of _text_? It's still clear but not much is gained. The most important thing is to remain consistent in your code, do not mix _txt_ with _text_.

## [Contributing](CONTRIBUTING.md)

---

## Index

[Special Character](#special-characters) [0-9](#09) <br>
[A](#a) [B](#b) [C](#c) [D](#d) [E](#e) [F](#f) [G](#g) [H](#h) [I](#i) [J](#j) [K](#k) [L](#l) [M](#m) [N](#n) [O](#o) [P](#p) [Q](#q) [R](#r) [S](#s) [T](#t) [U](#u) [V](#v) [W](#w) [X](#x) [Y](#y) [Z](#z)

<br>

## Special Characters

-  **$...** indicates a DOM node (jQuery selector, e.g. $btn)

## 0-9

-  **2** to (e.g. copy2mem)

## A

-  **abbr** abbreviation
-  **abs** absolute number
-  ~~**act** action / active / actual~~
-  **addr** address
-  **alloc** allocate
-  **alt** alternative / alternate
-  **app** application
-  **arg** argument
-  **arr** array
-  **async** asynchronous
-  **attr** attribute
-  **auth** authenticate / authentication
-  **avg** average

## B

-  _**bat** battery_
-  **bg** background
-  **bin** binary
-  **bool** boolean
-  ~~**brk** break~~
-  **btn** button
-  **buf** buffer

## C

-  ~~**c** character~~ (use **char**)
-  **calc** calculate
-  **cb** callback
-  _**cert** certificate_
-  **cfg** configuration
-  **ch** channel
-  **chk** check
-  **char** character
-  _**circ** circle_
-  **clr** clear
-  **cmd** command
-  **cmp** compare
-  **cnt** counter
-  **concat** concatenate
-  **conf / config** configuration
-  **conn** connection
-  **cont** continue
-  **conv** conversation
-  **col** column
-  **coll** collection
-  ~~**com** commercial / common / communication~~
-  ~~**cord** coordinate~~ (use **coord**)
-  **coord** coordinate
-  **cos** cosines
-  **csum** checksum
-  **ctrl** control
-  **ctx** context
-  **cur / curr** current
-  ~~**cpy** copy~~

## D

-  **db** database
-  **dbg** debug
-  **dec** decimal
-  **dec** decrease
-  **def** default / define
-  **del** delete
-  **dest** destination
-  **dev** development / device /  developer
-  **diff** difference
-  **dir** directory / direction
-  **dis** disable
-  **disp** display
-  **doc** document
-  **drv** driver
-  **dsc** descriptor
-  **dt** delta time
-  **dyn** dynamic

## E

-  **e** event
-  **e.g.** example (only used in comments)
-  **en** enable
-  **env** environment
-  _**eq** equal_
-  **err** error
-  **exe** executable
-  **expr** expression
-  **ext** extension

## F

-  _**f** function_
-  _**f** file_
-  **fac** factory
-  **fig** figure
-  **fmt** format
-  **fp** function pointer
-  **func** function

## G

-  _**ge** greater or equal_
-  **gen** generate
-  _**gt** greater then_

## H

-  _**h** height_
-  **hex** hexadecimal
-  ~~**hdr** header~~
-  **hor** horizontal
-  **hw** hardware

## I

-  **i** integer iterator
-  **id** identifier
-  **idx** index
-  **iface** interface
-  **img** image
-  **inc** include / increase
-  **info** information
-  **init** initialize (e.g. for methods which initialize new objects)
-  **ins** insert
-  **intf** interface
-  **int** integer
-  **itor** iterator

## J

-  **j** integer iterator (variable iterator, only used with **i** and **k**)

## K

-  **k** integer iterator (variable iterator, only used like **i** and **j**)
-  **key** object key (variable iterator, only  used with **val**)

## L

-  **lang** language
-  _**lat** latitude_
-  **lib** library
-  _**le** less or equal (binary relational operator)_
-  **len** length
-  **ll** linked list
-  _**lon** longitude_
-  _**lt** less than  (binary relational operator)_

## M

-  ~~**math** mathematics~~
-  **max** maximum
-  **mcu** microcontroller
-  **mem** memory
-  **meta** metadata
-  **mid** middle
-  **min** minimum
-  **misc** miscellaneous
-  **mng** manager
-  **mod** modulo
-  **msg** message
-  **mut** mutable

## N

-  _**n** no (boolean value, only with **yes**)_
-  **nav** navigation
-  _**ne** not equal (binary relational operator)_
-  **net** network
-  **nl** newline
-  **num** number

## O

-  **obj** object
-  ~~**ord** order~~
-  **ok** success
-  **op** operation
-  **opt** option / optional
-  **os** operating system

## P

-  _**p** pointer_
-  **param** parameter
-  **perf** performance
-  **pic** picture
-  **pos** position
-  **pred** prediction
-  **pref** preference
-  **prev** previous
-  **proc** process
-  **prod** production
-  **prof** profiler
-  **ptr** pointer
-  **pwr** power
-  **px** pixel

## Q

-  **q / qry** query

## R

-  _**r** radius_
-  **rand** random
-  **rec** record
-  _**rect** rectangle_
-  **recv** receive
-  **ref** reference
-  **rem** remove
-  **repo** repository
-  **req** required / requested
-  **res** response / result
-  **ret** return
-  **rev** revision
-  **rgx / regex** regular expression
-  **rng** range

## S

-  _**s** signed as prefix (variable type modifier, e.g. s8)_
-  _**sem** semaphore_
-  **sel** selected / selection
-  **sin** sine
-  **seq** sequence
-  **sqrt** square root
-  **src** source
-  **stat** statistics
-  **std** standard
-  **str** string
-  **sync** synchronize

## T

-  _**t** time / type (variable type modifier, e.g. uint8_t)_
-  _**temp** temperature_
-  **temp / tmp** temporary
-  ~~**tgl** toggle~~
-  **tmpl** template
-  **tmr** timer
-  **ts** timestamp
-  ~~**txt** text~~
-  **tz** timezone

## U

-  _**u** unsigned as prefix (variable type modifier, e.g. uint8_t)_
-  **upd** update
-  ~~**usr** user~~
-  **utl / util** utility


## V

-  _**v** value (variable iterator, only with **k**)_
-  **val** value
-  **var** variable
-  **vec** vector
-  **ver** version / vertical

## W

-  _**w** width_
-  **win** window
-  **ws** white space

## X

## Y

-  _**y** yes (boolean value, only with **n**)_

## Z

<br>

[Index](#index)
