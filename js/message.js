!function () {

    var model = Model({resourceName:'Message'})

    var view = View('section.message');

    // var model = {
    //     init:function () {
    //         var APP_ID = 'iFLTCmx0BxlL30XXPRmDaqmz-gzGzoHsz';
    //         var APP_KEY = 'rmS9Fox4m8FkDN2XtGlDykwb';
    //         AV.init({
    //             appId: APP_ID,
    //             appKey: APP_KEY
    //         });
    //     },
    //     //获取数据
    //     fetch:function () {
    //         var query = new AV.Query('Message');
    //         return query.find()//promise对象
    //     },
    //     //新建数据
    //     save:function (name,content) {
    //         var Message = AV.Object.extend('Message');
    //         var message = new Message();
    //         return message.save({//promise对象
    //             name:name,
    //             content: content
    //         })
    //     }
    // }

    var controller = Controller({
        
        init:function(view,controller){

            this.messageList = view.querySelector('#messageList');
            this.form = view.querySelector('form');
        
            this.loadMessages();
        },

        loadMessages:function () {
            var query = new AV.Query('Message');
            this.model.fetch().then( (messages) => {
                let array = messages.map((item)=>item.attributes);
                array.forEach((item)=>{
                    let li = document.createElement('li');
                    li.innerText = `${item.name}: ${item.content}`;
                    // let messageList = document.querySelector('#messageList');
                    this.messageList.appendChild(li)
                })
            }, function (error) {
                alert('网络繁忙，稍后再试')
            })
                .then(()=>{},(error)=>{
                    console.log(error);
                });
        },

        bindEvents:function () {

            // let myForm = document.querySelector('#postMessageForm');
            //     let myForm = this.form;
                this.form.addEventListener('submit', (e)=> {
                e.preventDefault();
                this.saveMessage();
            });
        },

        saveMessage:function () {
            let myForm = this.form;
            let name = myForm.querySelector('input[name=name]').value;
            let content = myForm.querySelector('input[name=content]').value;
            this.model.save({'name':name,'content':content}).then(function(object) {
                // window.location.reload()
                let li = document.createElement('li');
                li.innerText = `${object.attributes.name}: ${object.attributes.content}`;
                let messageList = document.querySelector('#messageList');
                messageList.appendChild(li);
                myForm.querySelector('input[name=content]').value = '';

            })
        }
        



    })



    // var controller = {
        // view:null,
        // model:null,
        // messageList:null,
        // init:function (view,model) {
        //     this.view = view;
        //     this.model = model;

        //     this.messageList = view.querySelector('#messageList');
        //     this.form = view.querySelector('form');
        //     this.model.init();
        //     this.loadMessages();
        //     this.bindEvents()
        // },

        // loadMessages:function () {
        //     var query = new AV.Query('Message');
        //     this.model.fetch().then( (messages) => {
        //         let array = messages.map((item)=>item.attributes);
        //         array.forEach((item)=>{
        //             let li = document.createElement('li');
        //             li.innerText = `${item.name}: ${item.content}`;
        //             // let messageList = document.querySelector('#messageList');
        //             this.messageList.appendChild(li)
        //         })
        //     }, function (error) {
        //         alert('网络繁忙，稍后再试')
        //     })
        //         .then(()=>{},(error)=>{
        //             console.log(error);
        //         });
        // },

        // bindEvents:function () {

        //     // let myForm = document.querySelector('#postMessageForm');
        //     //     let myForm = this.form;
        //         this.form.addEventListener('submit', (e)=> {
        //         e.preventDefault();
        //         this.saveMessage();
        //     });
        // },

        // saveMessage:function () {
        //     let myForm = this.form;
        //     let name = myForm.querySelector('input[name=name]').value;
        //     let content = myForm.querySelector('input[name=content]').value;
        //     this.model.save({'name':name,'content':content}).then(function(object) {
        //         // window.location.reload()
        //         let li = document.createElement('li');
        //         li.innerText = `${object.attributes.name}: ${object.attributes.content}`;
        //         let messageList = document.querySelector('#messageList');
        //         messageList.appendChild(li);
        //         myForm.querySelector('input[name=content]').value = '';

        //     })
        // }
    // };








    // var APP_ID = 'iFLTCmx0BxlL30XXPRmDaqmz-gzGzoHsz';
    // var APP_KEY = 'rmS9Fox4m8FkDN2XtGlDykwb';
    // AV.init({
    //     appId: APP_ID,
    //     appKey: APP_KEY
    // });

//存数据
//     let myForm = document.querySelector('#postMessageForm');
//
//     myForm.addEventListener('submit',function (e) {
//         e.preventDefault();
//         let name = myForm.querySelector('input[name=name]').value;
//         let content = myForm.querySelector('input[name=content]').value;
//         var Message = AV.Object.extend('Message');
//         var message = new Message();
//         message.save({
//             name:name,
//             content: content
//         }).then(function(object) {
//             // window.location.reload()
//             let li = document.createElement('li');
//             li.innerText = `${object.attributes.name}: ${object.attributes.content}`;
//             let messageList = document.querySelector('#messageList');
//             messageList.appendChild(li)
//             myForm.querySelector('input[name=content]').value = '';
//
//         })
//     });

//获取数据
//     var query = new AV.Query('Message');
//     query.find().then(function (messages) {
//         let array = messages.map((item)=>item.attributes);
//         array.forEach((item)=>{
//             let li = document.createElement('li');
//             li.innerText = `${item.name}: ${item.content}`;
//             let messageList = document.querySelector('#messageList');
//             messageList.appendChild(li)
//         })
//     }, function (error) {
//         alert('网络繁忙，稍后再试')
//     })
//         .then(()=>{},(error)=>{
//             console.log(error);
//         });



    controller.init(view,model);

}.call();





















// var APP_ID = 'iFLTCmx0BxlL30XXPRmDaqmz-gzGzoHsz';
// var APP_KEY = 'rmS9Fox4m8FkDN2XtGlDykwb';
//
// AV.init({
//     appId: APP_ID,
//     appKey: APP_KEY
// });
//
// //存数据
// let myForm = document.querySelector('#postMessageForm');
//
// myForm.addEventListener('submit',function (e) {
//     e.preventDefault();
//     let name = myForm.querySelector('input[name=name]').value;
//     let content = myForm.querySelector('input[name=content]').value;
//     var Message = AV.Object.extend('Message');
//     var message = new Message();
//     message.save({
//         name:name,
//     content: content
// }).then(function(object) {
//     // window.location.reload()
//         let li = document.createElement('li');
//         li.innerText = `${object.attributes.name}: ${object.attributes.content}`;
//         let messageList = document.querySelector('#messageList');
//         messageList.appendChild(li)
//         myForm.querySelector('input[name=content]').value = '';
//
// })
// });
//
// //获取数据
// var query = new AV.Query('Message');
// query.find().then(function (messages) {
//     let array = messages.map((item)=>item.attributes);
//     array.forEach((item)=>{
//         let li = document.createElement('li');
//         li.innerText = `${item.name}: ${item.content}`;
//         let messageList = document.querySelector('#messageList');
//         messageList.appendChild(li)
//     })
// }, function (error) {
//     alert('网络繁忙，稍后再试')
// })
//     .then(()=>{},(error)=>{
//         console.log(error);
//     });









// console.log(111)
//测试代码
// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//     words: 'Hello World!'
// }).then(function(object) {
//     alert('LeanCloud Rocks!');
// })