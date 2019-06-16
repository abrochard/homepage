<script>

 import Grid from './Grid.svelte';
 import Footer from './Footer.svelte';

 export let projects = [];
 export let socialMedias = [];

</script>

<style>

 h1 {
     text-align: center;
     margin-top: 15px;
 }

 div {
     margin: 15px;
     max-width: 800px;
 }
 @media all and (min-width: 500px) {
     div {
         margin-left: auto;
         margin-right: auto;
     }
 }

</style>


<h1>Homepage</h1>
<div>
    <h2>My Projects</h2>
    <Grid items="{projects}" />
    <br>
    <h2>Public Accounts</h2>
    <Grid items="{socialMedias}" />
</div>
<Footer />
