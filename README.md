# Abbreviations in program codes

Here is a list of **common**, **standard** and **well-known** abbreviation which you can find in program codes. 

A good abbreviation is:
* **clear** if you see it at first time you will know what it means (*nl* for *name list* is not good)
* **shorter** taking out one letter is not a real abbreviation (like *cpy* for *copy*)
* **non-context sensitive** like *r* for radius is straightforward only if you speak about circles

### Goal
Give a good name to your variables, functions, classes, files etc. is a very difficult task. Using long names (e.g. number_of_connected_clients) are always clear but it needs an extra time to read and harder to remember. Therefore choose a shorter form if possible but be careful to keep your names meaningful and clear.

Keep in mind as your scope getting bigger (from very local to API) you should choose more descriptive names. For example *res* is good to check the result of something in the next line. However if it's a global variable then *log_save_res* is more appropriate.

When speaking about API then establish a pattern of naming. 
For example in C: `namespace + module + action + object` (gui_label_set_text)

If you are using only these abbreviations your naming become more coherent, logical and understandable by other (even novice) programmers. Use the *context sensitive (italic)* abbreviations only in their context and avoid the ~~not recommended~~ (strike through) abbreviations because they are not clear or useless.

Of course you can judge the not recommended abbreviations. For example why don't use *txt* insted of *text*? It's still clear but in my opinion not shorter enough. The only important thing is to remain consitent in your code (do not mix *txt* with *text*).

### Contributing
* Please, create an issue or pull request to add new abbreviations or modify the existing ones.
* Formatting rules:
  * **abr** straightforward abbreviations (`* **key** meaning`)
  * _**abr** context sensitive abbreviations_ (`* _**key** meaning_`)
  * ~~**abr** not recommended abbreviations~~ (`* ~~**key** meaning~~`)
* Do not list here acronyms (like RAM, CPU, SQL)
* Keep alphabetic order
  
## 0..9
* **2** to (e.g. copy2mem) 
  
## A
* **act** actual (current)
* **alloc** allocate
* **alt** alternative/alternate
* **arg** argument
* **attr** attribute
* **app** application

## B
* **bg** background
* **bin** binary
* **bool** boolean
* **btn** button

## C
* _**c** character_
* **calc** calculate 
* **cb** callback
* **ch** channel
* **clr** clear
* **cmd** command
* **cmp** compare
* **cnt** counter
* **cont** continue
* **conv** conversation
* **col** column
* _**com** common_
* _**com** communication_
* **cord** coordinate
* **coord** coordinate
* **cos** cosines
* **ctrl** control
* **cur** current
* ~~**cpy** copy~~

## D
* **db** database
* **dec** decimal
* **def** default
* **del** delete
* **dest** destination
* **dev** device
* **diff** difference
* **dis** disable
* **disp** display
* **drv** driver
* **dsc** descriptor

## E
* **e.g.** example (in comments)
* **en** enable
* _**eq** equal_
* **err** error

## F
* **fp** function pointer
* _**f** function_
* _**f** file_
* **func** function

## G
* _**ge** greater or equal_
* _**gt** greater then_

## H
* _**h** height_
* **hex** hexadecimal
* **hor** horizontal

## I
* **i** integer iterator
* **id** identifier
* **img** image
* **int** integer

## J
* **j** integer iterator, only together with *i*

## K
* **k** integer iterator, only together with *i* and  *j*

## L
* **lib** library
* _**le** less or equal_
* ~~**len** length~~
* _**ll** linked list_
* _**lt** less then_

## M
* **math** mathematics
* **max** maximum
* **mem** memory
* **mcu** microcontroller
* **mid** middle
* **min** minimum
* **misc** miscellaneous
* **mng** manager
* **msg** message

## N
* _**n** no (only in pair with yes)_
* _**ne** not equal_
* **num** number

## O
* **obj** object
* ~~**ord** order~~
* **os** operating system

## P
* _**p** pointer_
* **param** parameter
* **pic** picture
* **pos** position
* **prev** previous
* **proc** process
* **ptr** pointer
* **px** pixel

## Q
* **qry** query

## R
* _**r** radius_
* **recv** receive
* **rem** remove
* **res** result
* **ret** return
* **rev** revision
* **req** required/requested

## S
* _**s** signed as prefix (s8 variable type)
* **str** string
* **sin** sinus
* **src** source
* _**sem** semaphore_

## T
* _**t** type (e.g. uint8_t)_
* **temp** temporary
* _**temp** temperature_
* _**tgl** toggle_
* **tmp** temporary 
* _**tmp** temperature_
* **tmr** timer
* ~~**txt** text~~

## U
* _**u** unsigned as prefix (e.g. uint8_t)_

## V
* ~~**val** value~~
* **var** variable
* _**v** version_
* **vert** vertical

## W
* _**w** width_ 
* **win** window

## X

## Y
* _**y** yes (only in pair with no)_

## Z
