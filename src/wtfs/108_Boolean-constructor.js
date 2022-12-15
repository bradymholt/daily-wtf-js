&gt; Boolean(false)
false
&gt; new Boolean(false)
{}
&gt; {} == true
false
&gt; Boolean({})
true
&gt; Boolean(new Boolean(false))
true
&gt; new Boolean(Boolean(false))
{}
&gt; if (new Boolean(false)) console.log('Indeed')
Indeed

// Source: @rtoal (https://twitter.com/rtoal)