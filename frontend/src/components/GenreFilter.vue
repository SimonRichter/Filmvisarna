<template>
   <div class="custom-select" :tabindex="tabindex" @blur="open = false">
      <div class="selected" :class="{ open: open }" @click="open = !open">
         {{ selected }}
      </div>
      <div class="items" :class="{ selectHide: !open }">
         <div
            v-for="(option, i) of options"
            :key="i"
            @click="
               selected = option;
               open = false;
               $emit('input', option);
            "
         >
            {{ option }}
         </div>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      options: {
         type: Array,
         required: true,
      },
      default: {
         type: String,
         required: false,
         default: null,
      },
      tabindex: {
         type: Number,
         required: false,
         default: 0,
      },
   },
   data() {
      return {
         selected: this.default
            ? this.default
            : this.options.length > 0
            ? this.options[0]
            : null,
         open: false,
      };
   },
   mounted() {
      this.$emit("input", this.selected);
   },
};
</script>

<style scoped>

.custom-select > *{
   font-family: 'Bebas Neue', cursive;
}
.custom-select {
   position: absolute;
   top: 23vw;
   left: 45.5vw;
   width: 10vw;
   text-align: left;
   outline: none;
   height: 36px;
   line-height: 50px;
   font-size: 18px;
}

.custom-select .selected {
   background-color: #131313;
   border-radius: 6px;
   /* border: 1px solid #666666; */
   color: rgb(238, 220, 192);
   padding-left: 1em;
   cursor: pointer;
   user-select: none;
}

.custom-select .selected.open {
 
   border-radius: 6px 6px 0px 0px;
}
.items{
    display: grid;
   width: 40vw;
   grid-template-columns: repeat(3,1fr);
}

.custom-select .selected:after {
   position: absolute;
   content: "";
   top: 22px;
   right: 0.7em;
   width: 0;
   height: 0;
   border: 5px solid transparent;
   border-color: rgb(238, 220, 192) transparent transparent transparent;
}

.custom-select .items {
   color: rgb(238, 220, 192);
   border-radius: 0px 0px 6px 6px;
   overflow: hidden;

   position: absolute;
   background-color: #131313;
   left: -15vw;

   z-index: 1;
  
}

.custom-select .items div {
   color: rgb(238, 220, 192);
   text-align: center;
   cursor: pointer;
   user-select: none;
}

.custom-select .items div:hover {
   background-color: #6e1020;
}

.selectHide {
   display: none;
}
</style>