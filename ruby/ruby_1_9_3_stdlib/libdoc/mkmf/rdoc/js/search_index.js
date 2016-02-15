var search_data = {"index":{"searchIndex":["array","file","logging","object","string_or_failed_format","string","%()","check_signedness()","check_sizeof()","convertible_int()","create_header()","create_makefile()","depend_rules()","dir_config()","dummy_makefile()","enable_config()","find_executable()","find_header()","find_library()","find_type()","have_const()","have_framework()","have_func()","have_header()","have_library()","have_macro()","have_struct_member()","have_type()","have_var()","try_const()","try_type()","with_config()"],"longSearchIndex":["array","file","logging","object","string_or_failed_format","string","string_or_failed_format::%()","object#check_signedness()","object#check_sizeof()","object#convertible_int()","object#create_header()","object#create_makefile()","object#depend_rules()","object#dir_config()","object#dummy_makefile()","object#enable_config()","object#find_executable()","object#find_header()","object#find_library()","object#find_type()","object#have_const()","object#have_framework()","object#have_func()","object#have_header()","object#have_library()","object#have_macro()","object#have_struct_member()","object#have_type()","object#have_var()","object#try_const()","object#try_type()","object#with_config()"],"info":[["Array","","Array.html","",""],["File","","File.html","",""],["Logging","","Logging.html","",""],["Object","","Object.html","",""],["STRING_OR_FAILED_FORMAT","","STRING_OR_FAILED_FORMAT.html","",""],["String","","String.html","",""],["%","STRING_OR_FAILED_FORMAT","STRING_OR_FAILED_FORMAT.html#method-c-25","(x)",""],["check_signedness","Object","Object.html#method-i-check_signedness","(type, headers = nil, opts = nil, &b)","<p>Returns the signedness of the given <code>type</code>.  You may optionally\nspecify additional <code>headers</code> to search in …\n"],["check_sizeof","Object","Object.html#method-i-check_sizeof","(type, headers = nil, opts = \"\", &b)","<p>Returns the size of the given <code>type</code>.  You may optionally\nspecify additional <code>headers</code> to search in for the …\n"],["convertible_int","Object","Object.html#method-i-convertible_int","(type, headers = nil, opts = nil, &b)","<p>Returns the convertible integer type of the given <code>type</code>.  You\nmay optionally specify additional <code>headers</code> …\n"],["create_header","Object","Object.html#method-i-create_header","(header = \"extconf.h\")","<p>Generates a header file consisting of the various macro definitions\ngenerated by other methods such as …\n"],["create_makefile","Object","Object.html#method-i-create_makefile","(target, srcprefix = nil)","<p>Generates the Makefile for your extension, passing along any options and\npreprocessor constants that …\n"],["depend_rules","Object","Object.html#method-i-depend_rules","(depend)","<p>Processes the data contents of the “depend” file. Each line of this file is\nexpected to be …\n"],["dir_config","Object","Object.html#method-i-dir_config","(target, idefault=nil, ldefault=nil)","<p>Sets a <code>target</code> name that the user can then use to configure\nvarious ‘with’ options with on the command …\n"],["dummy_makefile","Object","Object.html#method-i-dummy_makefile","(srcdir)","<p>creates a stub Makefile.\n"],["enable_config","Object","Object.html#method-i-enable_config","(config, default=nil)","<p>Tests for the presence of an –enable-<code>config</code> or\n–disable-<code>config</code> option. Returns true if the enable option …\n"],["find_executable","Object","Object.html#method-i-find_executable","(bin, path = nil)","<p>Searches for the executable <code>bin</code> on <code>path</code>. The\ndefault path is your PATH environment variable. If that …\n"],["find_header","Object","Object.html#method-i-find_header","(header, *paths)","<p>Instructs mkmf to search for the given <code>header</code> in any of the\n<code>paths</code> provided, and returns whether or not …\n"],["find_library","Object","Object.html#method-i-find_library","(lib, func, *paths, &b)","<p>Returns whether or not the entry point <code>func</code> can be found\nwithin the library <code>lib</code> in one of the <code>paths</code>\nspecified, …\n"],["find_type","Object","Object.html#method-i-find_type","(type, opt, *headers, &b)","<p>Returns where the static type <code>type</code> is defined.\n<p>You may also pass additional flags to <code>opt</code> which are then …\n"],["have_const","Object","Object.html#method-i-have_const","(const, headers = nil, opt = \"\", &b)","<p>Returns whether or not the constant <code>const</code> is defined.  You may\noptionally pass the <code>type</code> of <code>const</code> as  …\n"],["have_framework","Object","Object.html#method-i-have_framework","(fw, &b)","<p>Returns whether or not the given <code>framework</code> can be found on\nyour system. If found, a macro is passed as …\n"],["have_func","Object","Object.html#method-i-have_func","(func, headers = nil, &b)","<p>Returns whether or not the function <code>func</code> can be found in the\ncommon header files, or within any <code>headers</code> …\n"],["have_header","Object","Object.html#method-i-have_header","(header, preheaders = nil, &b)","<p>Returns whether or not the given <code>header</code> file can be found on\nyour system. If found, a macro is passed …\n"],["have_library","Object","Object.html#method-i-have_library","(lib, func = nil, headers = nil, &b)","<p>Returns whether or not the given entry point <code>func</code> can be found\nwithin <code>lib</code>.  If <code>func</code> is nil, the ‘main()’ …\n"],["have_macro","Object","Object.html#method-i-have_macro","(macro, headers = nil, opt = \"\", &b)","<p>Returns whether or not <code>macro</code> is defined either in the common\nheader files or within any <code>headers</code> you provide. …\n"],["have_struct_member","Object","Object.html#method-i-have_struct_member","(type, member, headers = nil, &b)","<p>Returns whether or not the struct of type <code>type</code> contains\n<code>member</code>.  If it does not, or the struct type can’t …\n"],["have_type","Object","Object.html#method-i-have_type","(type, headers = nil, opt = \"\", &b)","<p>Returns whether or not the static type <code>type</code> is defined.  You\nmay optionally pass additional <code>headers</code> to …\n"],["have_var","Object","Object.html#method-i-have_var","(var, headers = nil, &b)","<p>Returns whether or not the variable <code>var</code> can be found in the\ncommon header files, or within any <code>headers</code> …\n"],["try_const","Object","Object.html#method-i-try_const","(const, headers = nil, opt = \"\", &b)","<p>Returns whether or not the Constant <code>const</code> is defined.\n<p>See also <code>have_const</code>\n"],["try_type","Object","Object.html#method-i-try_type","(type, headers = nil, opt = \"\", &b)","<p>Returns whether or not the static type <code>type</code> is defined.\n<p>See also <code>have_type</code>\n"],["with_config","Object","Object.html#method-i-with_config","(config, default=nil)","<p>Tests for the presence of a –with-<code>config</code> or\n–without-<code>config</code> option. Returns true if the with option …\n"]]}}