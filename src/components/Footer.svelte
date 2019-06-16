<style>

 .footer {
     width: 100%;
     display: flex;
     position: fixed;
     bottom: 0;
     justify-content: space-around;

     border-top-color: grey;
     border-top-style: solid;
     border-top-width: 0.5px;
 }
 @media all and (max-width: 500px) {
     .footer {
         flex-direction: column;
     }
 }

 .footer div {
     margin: 5px;
 }

</style>


<div class="footer">
    <div>Built with <a href="https://svelte.dev" target="_blank">Svelte</a></div>
    <div>© 2019 Copyright Adrien Brochard. All rights reserved.</div>
</div>
