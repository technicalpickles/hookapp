var search_data = {"index":{"searchIndex":["app","gli","commands","doc","hook","hookapp","markdowndocumentlistener","hooker","string","all_bookmarks()","beginning()","bookmark_for()","bookmark_from_app()","cap()","cap!()","clip()","clip_bookmark()","clone_hooks()","command()","commands()","copy_bookmark()","default_command()","delete_all_hooks()","delete_hooks()","end_command()","end_commands()","end_options()","ending()","flag()","format_regex()","get_hooks()","link_all()","link_files()","linked_bookmarks()","new()","nil_if_missing()","open_gui()","open_linked()","options()","output_array()","program_desc()","program_long_desc()","search_bookmarks()","search_name()","search_path_or_address()","select_hook()","split_hook()","split_hooks()","switch()","valid_hook()","valid_hook!()","validate_format()","version()","readme"],"longSearchIndex":["app","gli","gli::commands","gli::commands::doc","hook","hookapp","hookapp::markdowndocumentlistener","hooker","string","hookapp#all_bookmarks()","hookapp::markdowndocumentlistener#beginning()","hookapp#bookmark_for()","hookapp#bookmark_from_app()","string#cap()","string#cap!()","string#clip()","hookapp#clip_bookmark()","hookapp#clone_hooks()","hookapp::markdowndocumentlistener#command()","hookapp::markdowndocumentlistener#commands()","hookapp#copy_bookmark()","hookapp::markdowndocumentlistener#default_command()","hookapp#delete_all_hooks()","hookapp#delete_hooks()","hookapp::markdowndocumentlistener#end_command()","hookapp::markdowndocumentlistener#end_commands()","hookapp::markdowndocumentlistener#end_options()","hookapp::markdowndocumentlistener#ending()","hookapp::markdowndocumentlistener#flag()","hookapp#format_regex()","hookapp#get_hooks()","hookapp#link_all()","hookapp#link_files()","hookapp#linked_bookmarks()","hookapp::markdowndocumentlistener::new()","string#nil_if_missing()","hookapp#open_gui()","hookapp#open_linked()","hookapp::markdowndocumentlistener#options()","hookapp#output_array()","hookapp::markdowndocumentlistener#program_desc()","hookapp::markdowndocumentlistener#program_long_desc()","hookapp#search_bookmarks()","hookapp#search_name()","hookapp#search_path_or_address()","hookapp#select_hook()","string#split_hook()","string#split_hooks()","hookapp::markdowndocumentlistener#switch()","string#valid_hook()","string#valid_hook!()","hookapp#validate_format()","hookapp::markdowndocumentlistener#version()",""],"info":[["App","","App.html","","<p>Main class for GLI app\n"],["GLI","","GLI.html","",""],["GLI::Commands","","GLI/Commands.html","",""],["GLI::Commands::Doc","","GLI/Commands/Doc.html","",""],["Hook","","Hook.html","",""],["HookApp","","HookApp.html","","<p>Hook.app functions\n"],["HookApp::MarkdownDocumentListener","","HookApp/MarkdownDocumentListener.html","",""],["Hooker","","Hooker.html","","<p>Hook.app CLI interface\n"],["String","","String.html","","<p>String helpers\n"],["all_bookmarks","HookApp","HookApp.html#method-i-all_bookmarks","()","<p>Get all known bookmarks. Return array of bookmark hashes.\n"],["beginning","HookApp::MarkdownDocumentListener","HookApp/MarkdownDocumentListener.html#method-i-beginning","()",""],["bookmark_for","HookApp","HookApp.html#method-i-bookmark_for","(url)","<p>Get a Hook bookmark for file or URL. Return bookmark hash.\n"],["bookmark_from_app","HookApp","HookApp.html#method-i-bookmark_from_app","(app, opts)","<p>Get a bookmark from the foreground document of specified app.\n"],["cap","String","String.html#method-i-cap","()","<p>Capitalize only if no uppercase\n"],["cap!","String","String.html#method-i-cap-21","()",""],["clip","String","String.html#method-i-clip","()",""],["clip_bookmark","HookApp","HookApp.html#method-i-clip_bookmark","(url, opts)","<p>Create a bookmark for specified file/url and copy to the clipboard.\n"],["clone_hooks","HookApp","HookApp.html#method-i-clone_hooks","(args)","<p>Copy all hooks from source file to target file\n"],["command","HookApp::MarkdownDocumentListener","HookApp/MarkdownDocumentListener.html#method-i-command","(name,aliases,desc,long_desc,arg_name,arg_options)","<p>Gives you a command in the current context and creates a new context of this command\n"],["commands","HookApp::MarkdownDocumentListener","HookApp/MarkdownDocumentListener.html#method-i-commands","()",""],["copy_bookmark","HookApp","HookApp.html#method-i-copy_bookmark","(title, url, opts)","<p>Create a bookmark from specified title and url and copy to the clipboard.\n"],["default_command","HookApp::MarkdownDocumentListener","HookApp/MarkdownDocumentListener.html#method-i-default_command","(name)","<p>Gives you the name of the current command in the current context\n"],["delete_all_hooks","HookApp","HookApp.html#method-i-delete_all_hooks","(url)","<p>Delete all hooked files/urls from target file\n"],["delete_hooks","HookApp","HookApp.html#method-i-delete_hooks","(args, opts)","<p>Delete hooks between two files/urls\n"],["end_command","HookApp::MarkdownDocumentListener","HookApp/MarkdownDocumentListener.html#method-i-end_command","(_name)","<p>Ends a command, and “pops” you back up one context\n"],["end_commands","HookApp::MarkdownDocumentListener","HookApp/MarkdownDocumentListener.html#method-i-end_commands","()",""],["end_options","HookApp::MarkdownDocumentListener","HookApp/MarkdownDocumentListener.html#method-i-end_options","()",""],["ending","HookApp::MarkdownDocumentListener","HookApp/MarkdownDocumentListener.html#method-i-ending","()","<p>Called when processing has completed\n"],["flag","HookApp::MarkdownDocumentListener","HookApp/MarkdownDocumentListener.html#method-i-flag","(name, aliases, desc, long_desc, default_value, arg_name, must_match, _type)","<p>Gives you a flag in the current context\n"],["format_regex","HookApp","HookApp.html#method-i-format_regex","(options)","<p>Create a single regex for validation of an array by first char or full match.\n"],["get_hooks","HookApp","HookApp.html#method-i-get_hooks","(url)","<p>Get bookmarks hooked to file or URL. Return array of bookmark hashes.\n"],["link_all","HookApp","HookApp.html#method-i-link_all","(args)","<p>Create bi-directional links between every file/url in the list of arguments\n"],["link_files","HookApp","HookApp.html#method-i-link_files","(args)","<p>Link 2 or more files/urls with bi-directional hooks.\n"],["linked_bookmarks","HookApp","HookApp.html#method-i-linked_bookmarks","(args, opts)","<p>Get a list of all hooks on a file/url.\n"],["new","HookApp::MarkdownDocumentListener","HookApp/MarkdownDocumentListener.html#method-c-new","(global_options, options, arguments, app)",""],["nil_if_missing","String","String.html#method-i-nil_if_missing","()",""],["open_gui","HookApp","HookApp.html#method-i-open_gui","(url)","<p>Open the Hook GUI for browsing/performing actions on a file or url\n"],["open_linked","HookApp","HookApp.html#method-i-open_linked","(url)","<p>Select from a menu of available hooks and open using macOS `open`.\n"],["options","HookApp::MarkdownDocumentListener","HookApp/MarkdownDocumentListener.html#method-i-options","()",""],["output_array","HookApp","HookApp.html#method-i-output_array","(hooks_arr, opts)","<p>Output an array of hooks in the given format.\n"],["program_desc","HookApp::MarkdownDocumentListener","HookApp/MarkdownDocumentListener.html#method-i-program_desc","(desc)","<p>Gives you the program description\n"],["program_long_desc","HookApp::MarkdownDocumentListener","HookApp/MarkdownDocumentListener.html#method-i-program_long_desc","(desc)",""],["search_bookmarks","HookApp","HookApp.html#method-i-search_bookmarks","(search, opts)","<p>Search bookmarks, using both names and addresses unless options contain “:names_only”. Return …\n"],["search_name","HookApp","HookApp.html#method-i-search_name","(search)","<p>Search boomark names/titles. Return array of bookmark hashes.\n"],["search_path_or_address","HookApp","HookApp.html#method-i-search_path_or_address","(search)","<p>Search bookmark paths and addresses. Return array of bookmark hashes.\n"],["select_hook","HookApp","HookApp.html#method-i-select_hook","(marks)","<p>Generate a menu of available hooks for selecting a hook to operate on.\n"],["split_hook","String","String.html#method-i-split_hook","()",""],["split_hooks","String","String.html#method-i-split_hooks","()",""],["switch","HookApp::MarkdownDocumentListener","HookApp/MarkdownDocumentListener.html#method-i-switch","(name, aliases, desc, long_desc, negatable)","<p>Gives you a switch in the current context\n"],["valid_hook","String","String.html#method-i-valid_hook","()",""],["valid_hook!","String","String.html#method-i-valid_hook-21","()",""],["validate_format","HookApp","HookApp.html#method-i-validate_format","(fmt, options)","<p>Check if format fully matches or matches the first character of available options. Return full valid …\n"],["version","HookApp::MarkdownDocumentListener","HookApp/MarkdownDocumentListener.html#method-i-version","(version)","<p>Gives you the program version\n"],["README","","README_rdoc.html","","<p>hookapp\n<p>A CLI for Hook.app on macOS.\n<p>hook - CLI interface for Hook.app (macOS)\n"]]}}