# disabled-bootstrap-polyfill

Bootstrap 'disabled' class doesn't work properly in Internet Explorer < 11 because pointerEvents css property are not supported in html objects.

I've created this polyfill in order to allow old IE version to have the same behaviuor. This sets the property 'disabled' on every element with 'disabled' bootstrap class when hover event is received.
