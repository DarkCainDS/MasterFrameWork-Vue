<template>
    <aside id="sidebar">
        <div id="nav-blog" class="sidebar-item">
            <h3>Puedes hacer esto</h3>
            <a href="#" class="btn btn-success">Crear articulos</a>
        </div>

        <div id="search" class="sidebar-item">
            <h3>Buscador</h3>
            <p>Encuentra el articulo que buscas</p>
            <form>
                <input type="text" name="search" />
                <input type="submit" name="submit" value="Buscar" class="btn">
            </form>
            <a href="#">Crear articulo</a>
        </div>
    </aside>
    <div class="clearfix"></div>
</template>
<script>
export default {
    name: 'AsideComponent',
}
</script>