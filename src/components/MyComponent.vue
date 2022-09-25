<template>
    <section id='content'>
        <h1>Hello Hackerman</h1>
        <p>Put your name</p><input type="text" v-model="subtitle" style="width:200px;"/>
        <h2>{{subtitle}}</h2>
        <h2>Conditionals</h2>
        <input type="number" v-model="age" style="width:200px;"/><br/>
        My age is : <strong>{{age}}</strong>
        <p v-if="age >= 18 " style="color:green;">You are an adult</p>
        <p v-if=" age < 18 && age > 0" style="color:red;">You are an child</p>
        <p v-if=" age === ''" style="color:red;"></p>

        <h2>Loops</h2>
        <ol>
            <li v-for="item in items" :key="item">{{item}}</li>
            </ol>
    </section>

</template>
<script>
export default {
    name: 'MyComponent',
    data() {
        return {
            subtitle: '',
            age: '',
            items: ['Sword of Revolution', 'Forgotten Blade', 'Sword of Damascus','Sword of Delusion']
        }
    }
}
</script>