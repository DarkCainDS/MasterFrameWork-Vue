<template>
    <header>
        <div class="header">
            <div class="center">

                <div id="logo">
                    <img src="../assets/logo.png" class="app-logo" alt="logotipo" />
                    <span id="brand">
                        <strong>Master </strong> Framework JS
                    </span>
                </div>

                <nav id="menu">
                    <ul>
                        <li>
                            <router-link to="/home" active-class="active">Inicio</router-link>
                        </li>
                        <li>
                            <router-link to="/Blog" active-class="active">Blog</router-link>
                        </li>
                        <li>
                            <router-link to="/Form" active-class="active">Form</router-link>
                        </li>
                        <li>
                            <router-link to="/HelloWorld" active-class="active">Page one</router-link>
                        </li>
                        <li>
                            <router-link to="/MyComponent" active-class="active">My Component</router-link>

                        </li>
                    </ul>
                </nav>

                <div class="clearfix"></div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',

}
</script>