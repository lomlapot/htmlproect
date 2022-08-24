Vue.component('hello', {
  props: ['name', 'fname'],
  template: '<div><h2> Hello {{name}} {{fname}}</h2><p>text</p></div>'
})

Vue.component('value1', {
  props: ['val'],
  template: '<li>{{val}} </li>'
})
Vue.component('jsont', {
  data(){
  return {
    id:56,
    dat: 6
    }
  },
    methods :{
      fetchPost(){
fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
      },
     async g(){
       try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3'); 
        let posts = await response.json(); 
        console.log(posts);
        this.id=posts;
        return posts ; 
        } catch(error){ alert(error); }
     }
    
  },
  template: 
  '<div><button @click=g> добавить </button><p>{{id}}</p></div>',
})

var app = new Vue({
  el: '#app',  
  data: {
    title : 'Vue proect', 
    items : ['PETRO','ALICE', 'SARAH'], 
    message : 'privet', 
    a : 0,
    comments :[], 
    comment : '', 
    rawHtml :'<span style = color:red >текст красный </span>', 
    ok : true, 
 }, 
  methods :{
    
    focus(){
     this.$refs.name.focus();
    }, 
    toUper : function () {
      // body...  
      const v =6;   
      this.message = this.message.toUpperCase();
      //this.a++;
    }, 
    
    increment () {
      this.a++;
    }, 
    decrement : function (){
      this. a--;
    }, 
   addComment(){  
      this.comments. push(this.comment);
      this.comment ='';   
    }, 
  } 
});


