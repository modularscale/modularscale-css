CSS.registerProperty({
    name: '--ms-base',
    syntax: '<length>',
    inherits: true,
    initialValue: '16px'
})

CSS.registerProperty({
  name: '--ms-ratio',
  syntax: '<number>',
  inherits: true,
  initialValue: '1.5'
})

var min = -10;
var max = 20;
for (let i = min; i <= max; i++) {
  CSS.registerProperty({
    name: ('--ms' + i),
    syntax: '<length>',
    inherits: true,
    initialValue: '16px'
  })
  var mod = ' * var(--ms-ratio)'.repeat(Math.abs(i));
  if(i < 0) {
    var mod = ' / var(--ms-ratio)'.repeat(Math.abs(i));
  }
  document.body.style.setProperty('--ms' + i, 'calc(var(--ms-base) ' + mod + ')');
}