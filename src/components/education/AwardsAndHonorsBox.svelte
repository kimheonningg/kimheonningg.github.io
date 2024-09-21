<script>
    export let awardsList;

    import CircleSmall from 'svelte-material-icons/CircleSmall.svelte'
</script>

<div class = "awards-and-honors">
    {#each awardsList as eachAward}
        <div class = "each-awards-and-honors">
            <CircleSmall size = "20px"/> {eachAward.name}
        </div>
    {/each}
</div>

<style>
    .awards-and-honors {
        padding-left: 30px;
        display: flex;
        flex-direction: column;
        font-size: 14px;
    }

    .each-awards-and-honors {
        display: flex;
        flex-direction: row;
        margin-bottom: 3px;
    }
</style>