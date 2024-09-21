<script>
    export let headerTitle;
    export let headerIcon;
    export let isBoxHeaderOpen;
    export let onClickBoxHeader; 
    export let hideTriangle;
    
    import Triangle  from 'svelte-material-icons/Triangle.svelte'
</script>

<div class="box-header" on:click = {onClickBoxHeader}>
    <p class="box-header-title"> <svelte:component this={headerIcon} height="20px" /> {headerTitle} </p> 
    {#if !hideTriangle}
        <div class:rotate-180={!isBoxHeaderOpen}> <Triangle height = "20px" color = "#db3d67"/> </div> 
    {/if}
</div>

<style>
    .box-header {
        display: flex;
        flex-direction: row;
        align-items: center; 
        justify-content: space-between;
        background-color: #fff0f5;
		box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
		border-radius: 35px;
        padding: 5px 10px;
        cursor: default;
    }

    .box-header-title {
        font-weight: 700;
        font-size: 20px;
        margin: 5px;
    }

    .rotate-180 {
        transform: rotate(180deg);
        display: inline-block;
    }
</style>