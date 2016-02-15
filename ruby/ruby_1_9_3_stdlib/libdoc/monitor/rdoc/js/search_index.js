var search_data = {"index":{"searchIndex":["monitor","monitormixin","conditionvariable","timeout","broadcast()","extend_object()","mon_enter()","mon_exit()","mon_synchronize()","mon_try_enter()","new()","new()","new_cond()","signal()","synchronize()","try_mon_enter()","wait()","wait_until()","wait_while()"],"longSearchIndex":["monitor","monitormixin","monitormixin::conditionvariable","monitormixin::conditionvariable::timeout","monitormixin::conditionvariable#broadcast()","monitormixin::extend_object()","monitormixin#mon_enter()","monitormixin#mon_exit()","monitormixin#mon_synchronize()","monitormixin#mon_try_enter()","monitormixin::new()","monitormixin::conditionvariable::new()","monitormixin#new_cond()","monitormixin::conditionvariable#signal()","monitormixin#synchronize()","monitormixin#try_mon_enter()","monitormixin::conditionvariable#wait()","monitormixin::conditionvariable#wait_until()","monitormixin::conditionvariable#wait_while()"],"info":[["Monitor","","Monitor.html","","<p>Use the Monitor class when you want to have a lock object for blocks with\nmutual exclusion.\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">require</span> <span class=\"ruby-string\">'monitor'</span> <span class=\"ruby-operator\">...</span>\n</pre>\n"],["MonitorMixin","","MonitorMixin.html","","<p>In concurrent programming, a monitor is an object or module intended to be\nused safely by more than one …\n"],["MonitorMixin::ConditionVariable","","MonitorMixin/ConditionVariable.html","","<p>FIXME: This isn’t documented in Nutshell.\n<p>Since MonitorMixin.new_cond returns a ConditionVariable, and …\n"],["MonitorMixin::ConditionVariable::Timeout","","MonitorMixin/ConditionVariable/Timeout.html","",""],["broadcast","MonitorMixin::ConditionVariable","MonitorMixin/ConditionVariable.html#method-i-broadcast","()","<p>Wakes up all threads waiting for this lock.\n"],["extend_object","MonitorMixin","MonitorMixin.html#method-c-extend_object","(obj)",""],["mon_enter","MonitorMixin","MonitorMixin.html#method-i-mon_enter","()","<p>Enters exclusive section.\n"],["mon_exit","MonitorMixin","MonitorMixin.html#method-i-mon_exit","()","<p>Leaves exclusive section.\n"],["mon_synchronize","MonitorMixin","MonitorMixin.html#method-i-mon_synchronize","()","<p>Enters exclusive section and executes the block.  Leaves the exclusive\nsection automatically when the …\n"],["mon_try_enter","MonitorMixin","MonitorMixin.html#method-i-mon_try_enter","()","<p>Attempts to enter exclusive section.  Returns <code>false</code> if lock\nfails.\n"],["new","MonitorMixin","MonitorMixin.html#method-c-new","(*args)","<p>Use <code>extend MonitorMixin</code> or <code>include MonitorMixin</code>\ninstead of this constructor.  Have look at the examples …\n"],["new","MonitorMixin::ConditionVariable","MonitorMixin/ConditionVariable.html#method-c-new","(monitor)",""],["new_cond","MonitorMixin","MonitorMixin.html#method-i-new_cond","()","<p>Creates a new MonitorMixin::ConditionVariable associated with the receiver.\n"],["signal","MonitorMixin::ConditionVariable","MonitorMixin/ConditionVariable.html#method-i-signal","()","<p>Wakes up the first thread in line waiting for this lock.\n"],["synchronize","MonitorMixin","MonitorMixin.html#method-i-synchronize","()",""],["try_mon_enter","MonitorMixin","MonitorMixin.html#method-i-try_mon_enter","()","<p>For backward compatibility\n"],["wait","MonitorMixin::ConditionVariable","MonitorMixin/ConditionVariable.html#method-i-wait","(timeout = nil)","<p>Releases the lock held in the associated monitor and waits; reacquires the\nlock on wakeup.\n<p>If <code>timeout</code> …\n"],["wait_until","MonitorMixin::ConditionVariable","MonitorMixin/ConditionVariable.html#method-i-wait_until","()","<p>Calls wait repeatedly until the given block yields a truthy value.\n"],["wait_while","MonitorMixin::ConditionVariable","MonitorMixin/ConditionVariable.html#method-i-wait_while","()","<p>Calls wait repeatedly while the given block yields a truthy value.\n"]]}}