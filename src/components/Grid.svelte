<script>

 export let items = [];

</script>

<style>

 .container {
     display: grid;
     grid-template-columns: 1fr 1fr;
     align-items: stretch;
     grid-gap: 15px;
     text-align: center;
 }

 a {
     text-decoration: none;
     color: inherit;
 }

 .card {
     border: 1px solid black;
     padding: 10px;
 }

 .card:hover {
     color: white;
     background: var(--main-text-color);
     box-shadow: 10px 10px 5px black;
 }

 .title {
     font-size: 24px;
 }

 .desc {
     margin-top: 5px;
     margin-bottom: 5px;
 }

</style>


<div class="container">
    {#each items as item}
    <div class="card box-shadow">
        <a href="{item.url}">
            <div class="title">
                {item.title}
            </div>
            {#if item.description}
            <div class="desc">
                {item.description}
            </div>
            {/if}
        </a>
    </div>
    {/each}
</div>
