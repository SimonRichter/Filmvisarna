<template>
  <div class="container">
    <div class="calendar">
      <div class="month">
        <div class="arrow" @click="callMeBackBaby()" v-bind:class="{ inactivate: testmonth==thisMonth }"> &#8678;</div>
        <div class="date">
          <h1>{{ testmonth }}</h1>
          <p>{{ testtoday }}</p>
        </div>
        <div class="arrow"  @click="callMeBaby()" v-bind:class="{ inactivate: testmonth!=thisMonth }" > &#x21E8;</div>
      </div>
      <div class="weekdays">
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
        <div>Sun</div>
      </div>
      <div class="days">
        <div v-for="index in firstDayNum-1" :key="index" class="prev-date">{{ prevDays -( firstDayNum -index)+1 }}</div>
        <div v-for="index in lastDay" :key="index">
          <div  @click="testDate(index,testmonth)" v-bind:class="{ today: new Date().getDate()==index }">{{index}}</div> </div>
        <div v-for="index in nextMonthDays" :key="index" class="prev-date">{{index}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    const date = new Date();
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const thisMonth=months[date.getMonth()];
    const lastDay = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();
    date.setDate(1)
    const prevDays=new Date(date.getFullYear(),date.getMonth(),0).getDate();
    const firstDayNum = date.getDay();
    const testmonth = months[date.getMonth()];
    const testtoday = new Date().toDateString();
    const lastDayNum= new Date(date.getFullYear(),date.getMonth()+1,0).getDay();
    const nextMonthDays=7-lastDayNum
    let a,b;
    return { testmonth, testtoday,lastDay ,firstDayNum,prevDays,nextMonthDays,thisMonth,months,a,b};
  },

  methods: { 
    testDate(dateNum,monthNum){
      this.a=dateNum
      this.b=this.months.indexOf(monthNum)+1
      this.$emit('datePicked',this.a,this.b)
    },

    newMethod(){
      this.months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
     
     this.lastDay = new Date(this.date.getFullYear(),this.date.getMonth()+1,0).getDate();
     this.date.setDate(1)
     this.prevDays=new Date(this.date.getFullYear(),this.date.getMonth(),0).getDate();
     this.firstDayNum = this.date.getDay();
     this.testmonth = this.months[this.date.getMonth()];
     this.testtoday = new Date().toDateString();
     this.lastDayNum= new Date(this.date.getFullYear(),this.date.getMonth()+1,0).getDay();
     this.nextMonthDays=7-this.lastDayNum

    },
    callMeBaby(){
    this.date= new Date()
    this.date.setMonth(this.date.getMonth()+1)
    this.newMethod()

    },
     callMeBackBaby(){
     this.date= new Date()
     this.date.setMonth(this.date.getMonth())
     this.newMethod()
    
    }  
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

.container {
 margin-left: 40vw;
  color: rgb(241, 236, 236);
  width: fit-content;

}

.calendar {
  width: 300px;
  height: 300px;
  background-color: #222227;
  box-shadow: 0 0.5rem 3rem rgba(0, 0, 0, 0.4);
    border-radius: 30px;


}

.month {
  width: 100%;
  height: 60px;
  background-color: #530606;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  text-align: center;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}

.arrow{
 font-size: 30px;
 cursor: pointer;
}

.month h1 {
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;

}

.month p {
  font-size:15px;
}

.weekdays {
 padding: 5px 2px;
  display: flex;
  align-items: center;
}

.weekdays div {
  font-size: 15px;
  font-weight: 400;
  width:80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.days {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding:10px;
}

.days div {
  font-size: 15px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s;
  border-radius: 45px;
}

.days div:hover:not(.today) {
  background-color: #b69503;
  border-radius: 45px;
  cursor: pointer;
}

.prev-date,
.next-date,
.inactivate {
  opacity: 0.3;
}

.today {
  background-color: #700a0a;
}
</style>