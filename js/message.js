var APP_ID = 'iFLTCmx0BxlL30XXPRmDaqmz-gzGzoHsz';
var APP_KEY = 'rmS9Fox4m8FkDN2XtGlDykwb';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

console.log(111)

//测试代码
var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
testObject.save({
    words: 'Hello World!'
}).then(function(object) {
    alert('LeanCloud Rocks!');
})