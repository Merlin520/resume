var APP_ID = 'iFLTCmx0BxlL30XXPRmDaqmz-gzGzoHsz';
var APP_KEY = 'rmS9Fox4m8FkDN2XtGlDykwb';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

//存数据
let myForm = document.querySelector('#postMessageForm');

myForm.addEventListener('submit',function (e) {
    e.preventDefault();
    let name = myForm.querySelector('input[name=name]').value;
    let content = myForm.querySelector('input[name=content]').value;
    var Message = AV.Object.extend('Message');
    var message = new Message();
    message.save({
        name:name,
    content: content
}).then(function(object) {
    window.location.reload()
})
});

//获取数据
var query = new AV.Query('Message');
query.find().then(function (messages) {
    let array = messages.map((item)=>item.attributes);
    array.forEach((item)=>{
        let li = document.createElement('li');
        li.innerText = `${item.name}: ${item.content}`;
        let messageList = document.querySelector('#messageList');
        messageList.appendChild(li)
    })
}, function (error) {
    alert('网络繁忙，稍后再试')
})
    .then(()=>{},(error)=>{
        console.log(error);
    });









// console.log(111)
//测试代码
// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//     words: 'Hello World!'
// }).then(function(object) {
//     alert('LeanCloud Rocks!');
// })