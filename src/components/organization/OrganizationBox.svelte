<script>
    import { content } from "../../routes/content";

    import BoxHeader from "../common/BoxHeader.svelte";
    import AccountTie from "svelte-material-icons/AccountTie.svelte"
    import EachOrganizationBox from "./EachOrganizationBox.svelte";
    
    let isOrganizationHeaderOpen = false;
    const onClickVolunteerHeader = () => {
        isOrganizationHeaderOpen = !isOrganizationHeaderOpen;
    }
</script>

<div class = "organization">
    <BoxHeader 
        headerTitle = "Organizations:"
        headerIcon = {AccountTie}
        isBoxHeaderOpen = {isOrganizationHeaderOpen}
        onClickBoxHeader = {onClickVolunteerHeader}
        hideTriangle = {false}
    />
    {#if isOrganizationHeaderOpen}
        <div class = "organization-body">
            {#each content.organization as eachOrganization}
                <EachOrganizationBox eachOrganization = {eachOrganization} />
            {/each}
        </div>
    {/if}
</div>

<style>
    .organization{
        margin-bottom: 40px;
        width: 100%;
    }

    .organization-body {
        padding: 0 10px;
        margin-top: 15px;
    }
</style>