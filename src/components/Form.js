import React from "react"

<form action="https://api.staticforms.xyz/submit" method="post">
<input type="text" name="name" placeholder="Your Name">
<input type="text" name="email" placeholder="Your Email" />
<textarea name="message"></textarea>
<input type="text" name="honeypot" style="display:none">
<input type="hidden" name="accessKey" value="aaaaaaaa-bbbb-cccc-dddd-eeee6666kkkk">
<input type="hidden" name="subject" value="Contact us from - example.com" />
<input type="hidden" name="replyTo" value="@">
<input type="hidden" name="redirectTo" value="https://example.com/contact/success">
<input type="submit" value="Submit" />
</form>