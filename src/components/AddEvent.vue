<template>

<div class="">
  <h4> Add Event </h4>
  <div class="form">
    <div class="form-group">
    <label>Title</label>
    <input type="text" class="form-control" v-model="event.title">
    </div>
<div class="form-group">
    <label>description</label>
    <input type="text" class="form-control" v-model="event.description">
    </div>
<div class="form-group">
    <label>date</label>
    <input type="date" class="form-control" v-model="event.date">
    </div>

<div class="form-group">
    <label>location</label>
    <input type="text" class="form-control" v-model="event.location">
    </div>
<div class="form-group">
    <label>price</label>
    <input type="text" class="form-control" v-model="event.price">
    </div>
<div class="form-group">
    <label>inside</label>
    <input type="text" class="form-control" v-model="event.inside">
    </div>
<div class="form-group">
    <label>equipment</label>
    <input type="text" class="form-control" v-model="event.equipment">
    </div>
<div class="form-group">
    <label>persons</label>
    <input type="text" class="form-control" v-model="event.persons">
    </div>
<div class="form-group">
    <label>picture</label>
    <input type="text" class="form-control" v-model="event.picture">
    </div>
    <button class="btn-sm btn-primary" @click="addEvent">Submit</button>
</div>
</div>
</template>

<script>
import { eventsRef } from '../firebaseApp'
export default {
    data() {
        return {
            event: {
                title: '',
                description: '',
                date: '',
                location: '',
                price: '',
                email: '',
                inside: '',
                equipment: '',
                persons: '',
                picture: ''
            }
        }
    },

    methods: {
        addEvent() {
            this.event.email = this.$store.state.user.email;
            eventsRef.push(this.event)
        }
    } 
}

</script>