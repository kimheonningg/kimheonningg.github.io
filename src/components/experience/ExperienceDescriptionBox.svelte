<script>
    export let descriptionList;

    import CircleSmall from 'svelte-material-icons/CircleSmall.svelte'
</script>

<div class = "description">
    {#each descriptionList as eachDescription}
        <div class = "each-description">
            -&nbsp;{eachDescription}
        </div>
    {/each}
</div>

<style>
    .description {
        padding-left: 30px;
        padding-right: 20px;
        display: flex;
        flex-direction: column;
        font-size: 14px;
    }

    .each-description {
        display: flex;
        flex-direction: row;
        margin-bottom: 3px;
    }
</style>