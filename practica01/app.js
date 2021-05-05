new Vue({
    el: '#app',
    
    data () {
      return {
        title: "", 
        time: null,
        courses: [''], 
      }

    },
    
    computed: {
        totalTime (){
            const reducer = (acum, course) => parseInt(acum) + parseInt(course.hours);
            var total = this.courses.reduce(reducer, 0);
            return total;
        }
    },
    
    methods: {
      addCourse () {
          this.courses.push({
              course: this.title, 
              hours: this.time
          })
          this.title = ""
          this.time = ""
          if(this.courses[0] === ''){
            this.courses.shift()
          }
      }
    }
  })