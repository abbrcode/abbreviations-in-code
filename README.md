# Abbreviations in program codes

Here is a list of **common**, **standard** and **well-known** abbreviations which you can find in software code.

A good abbreviation is:
* **clear** - if seen for the first time you still know what it means (good: *arg* for *argument* | bad: *nl* for *name_list*)
* **shorter** - taking out one letter is not a real abbreviation (good: *doc* for *document* | bad: *cpy* for *copy*)
* **non-context sensitive** - like *r* for radius is straightforward only if you speak about circles
* **programming language/flavor agnostic** - understood by all developers

### Goal
Giving good names to your variables, functions, classes, files etc. can be a hard task. Long names (e.g. number_of_connected_clients) are always clear, but need extra time to read, take up line space and are harder to remember. Therefore choosing a shorter form if possible is advisable, whilst being careful to keep names meaningful and clear.

Keep in mind that as your scope is getting bigger (from very local to API) you should choose more descriptive names. For example *res* is good to check the result of something in the next line. However if it's a global variable then *log_save_res* is more appropriate.

When speaking about APIs then establish a pattern of naming.
For example in C: `namespace + module + action + object` (gui_label_set_text)

If you are using the abbreviations below your naming will become more coherent, logical and understandable to other (even novice) programmers. Use the *context sensitive (italic)* abbreviations only in their context and avoid the ~~not recommended~~ (strike through) abbreviations because they are not clear or useless.

Of course, you can consider using the not recommended abbreviations. For example why not use *txt* instead of *text*? It's still clear but not much is gained. The most important thing is to remain consistent in your code (do not mix *txt* with *text*).

### Contributing
* Please, create an issue or pull request to add new abbreviations or modify the existing ones.
* Formatting rules:
  * **abr** straightforward abbreviations (`* **key** meaning`)
  * _**abr** context sensitive abbreviations_ (`* _**key** meaning_`)
  * ~~**abr** not recommended abbreviations~~ (`* ~~**key** meaning~~`)
* Do not list here acronyms (like RAM, CPU, SQL)
* Keep alphabetic order

## Special Characters
* **$** indicates a DOM node (e.g. $btn)

## 0..9
* **2** to (e.g. copy2mem)

## A
* **abs** absolute number
* ~~**act**~~ (could be actual, action, active)
* **addr** address
* **alloc** allocate
* **alt** alternative/alternate
* **arg** argument
* **attr** attribute
* **app** application
* **arr** array
* **auth** authenticate/authentication
* **avg** average

## B
* _**bat** battery_
* **bg** background
* **bin** binary
* **bool** boolean
* ~~**brk** break~~
* **btn** button
* **buf** buffer

## C
* ~~**c** character~~
* **char** character
* **calc** calculate
* **cb** callback
* _**cert** certificate_
* **cfg** configuration
* **ch** channel
* _**circ** circle_
* **clr** clear
* **cmd** command
* **cmp** compare
* **cnt** counter
* **concat** concatenate/concatenation
* **conf** configuration
* **config** configuration
* **conn** connection
* **cont** continue
* **conv** conversation
* **col** column
* **coll** collection
* ~~**com**~~ (could be common, comercial, communication)
* ~~**cord** coordinate~~ (use coord)
* **coord** coordinate
* **cos** cosines
* **csum** checksum
* **ctrl** control
* **ctx** context
* **cur** current
* ~~**cpy** copy~~ (saves only one character)

## D
* **db** database
* **dbg** debug
* **dec** decimal
* **dec** decrease
* **def** default
* **def** define
* **del** delete
* **dest** destination
* **dev** device
* **dev** development
* **diff** difference
* **dir** directory
* **dis** disable
* **disp** display
* **doc** document
* **drv** driver
* **dsc** descriptor
* **dt** delta time

## E
* **e** event
* **e.g.** example (in comments)
* **en** enable
* **env** environment
* _**eq** equal_
* **err** error
* **expr** expression

## F
* _**f** function_
* _**f** file_
* **fig** figure
* **fmt** format
* **fp** function pointer
* **func** function

## G
* _**ge** greater or equal_
* **gen** generate
* _**gt** greater then_

## H
* _**h** height_
* **hex** hexadecimal
* **hdr** header
* **hor** horizontal
* **hw** hardware

## I
* **i** integer iterator
* **id** identifier
* **idx** index
* **iface** interface
* **img** image
* **inc** increase, include
* **info** information
* **init** initialize (esp. for methods which initialize new objects)
* **int** integer

## J
* **j** integer iterator, only together with *i*

## K
* **k** integer iterator, only together with *i* and  *j*
* **k** object key, only together with *v* for *value*

## L
* **lang** language
* _**lat** latitude_
* **lib** library
* _**le** less or equal_
* **len** length
* ~~**ll**~~ (could be linked list or less then)
* _**lon** longitude_

## M
* **math** mathematics
* **max** maximum
* **mem** memory
* **mcu** microcontroller
* **mid** middle
* **min** minimum
* **misc** miscellaneous
* **mng** manager
* **mod** modulo
* **msg** message

## N
* _**n** no (only in pair with yes)_
* _**ne** not equal_
* **net** network
* **num** number

## O
* **obj** object
* ~~**ord** order~~
* **op** operation
* **os** operating system

## P
* _**p** pointer_
* **param** parameter
* **pic** picture
* **pos** position
* **pred** prediction
* **pref** preference
* **prev** previous
* **proc** process
* **prof** profiler
* **ptr** pointer
* **pwr** power
* **px** pixel

## Q
* **q** query
* **qry** query

## R
* **rand** random
* _**r** radius_
* _**rect** rectangle_
* **recv** receive
* **rem** remove
* **res** result/response
* **ret** return
* **rev** revision
* **req** required/requested
* **rng** range

## S
* _**s** signed as prefix (s8 variable type)
* _**sem** semaphore_
* **sel** selection/selected
* **seq** sequence
* **stat** statistics
* **std** standard
* **str** string
* **sin** sine
* **sqrt** square root
* **src** source
* **sync** synchronize

## T
* _**t** time or type (e.g. uint8_t)_
* **temp** temporary
* _**temp** temperature_
* ~~**tgl** toggle~~
* **tmp** temporary
* **tmr** timer
* **ts** timestamp
* ~~**txt** text~~

## U
* _**u** unsigned as prefix (e.g. uint8_t)_
* ~~**usr** user~~

## V
* **v** value, only together with *k* for *key*
* **val** value
* **var** variable
* _**v** version, vector_
* **vert** vertical

## W
* _**w** width_
* **win** window

## X

## Y
* _**y** yes (only in pair with no)_

## Z
