<template>
    <section id="content">
        <h1 class="subheader">Formulary</h1>
        <form class="mid-form">
            <div class="form-group">
                <label for="Name">Name</label>
                <input type="text" name="Name" />
            </div>
            <div class="form-group">
                <label for="Last-Name">Last-Name</label>
                <input type="text" name="Last-Name" />
            </div>
            <div class="form-group">
                <label for="bio">Biography</label>
                <textarea name="bio"></textarea>
            </div>
            <div class="form-group radibuttons">
                <input type="radio" name="Gender" value="Men" /> Men <br />
                <input type="radio" name="Gender" value="Women" /> Women <br />
                <input type="radio" name="Gender" value="Other" /> Other <br />
            </div>
            <div class="clearfix"></div>
            <input type="submit" value="Send" class="btn btn-success formularie" />
        </form>

    </section>
</template>
<script>
export default {
    name: 'FormComponent',
}
</script>