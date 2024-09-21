<script>
    export let isHeaderOpen;
    export let onClickHeader;
    export let headerIcon;
    export let headerUrl = null;

    import LinkVariant from 'svelte-material-icons/LinkVariant.svelte'
    import Triangle  from 'svelte-material-icons/Triangle.svelte'

    const onClickEachBoxHeader = () => {
        onClickHeader();
    };
</script>

<div class = "each-box-header" on:click={onClickEachBoxHeader}> 
    <div class = "each-box-header-left">
        <div class="icon"> <svelte:component this={headerIcon} width = "20px" height = "20px"/> </div>
        <slot></slot>
        {#if headerUrl}
            <a href={headerUrl} on:click={(event)=>event.stopPropagation()}> <LinkVariant size = "13px"/> </a>
        {/if}         
    </div>
    <div class:rotate-180={!isHeaderOpen}> <Triangle height = "20px" color = "rgba(219, 61, 103, 0.5)"/> </div> 
</div>

<style>
   .each-box-header {
        font-size: 18px;
        display: flex;
        flex-direction: row;
        align-items: center; 
        justify-content: space-between;
    }

    .each-box-header-left {
        display: flex;
        flex-direction: row;
        gap: 8px;
    }

    .icon {
        margin-right: 5px;
    }

    .rotate-180 {
        transform: rotate(180deg);
    }
</style>
