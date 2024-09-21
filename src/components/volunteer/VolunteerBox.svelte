<script>
    import { content } from "../../routes/content";
    
    import BoxHeader from "../common/BoxHeader.svelte";
    import HeartPulse from "svelte-material-icons/HeartPulse.svelte"

    import EachVolunteerBox from "./EachVolunteerBox.svelte";
    
    let isVolunteerHeaderOpen = false;
    const onClickVolunteerHeader = () => {
        isVolunteerHeaderOpen = !isVolunteerHeaderOpen;
    }
</script>

<div class = "volunteer">
    <BoxHeader 
        headerTitle = "Volunteering:"
        headerIcon = {HeartPulse}
        isBoxHeaderOpen = {isVolunteerHeaderOpen}
        onClickBoxHeader = {onClickVolunteerHeader}
        hideTriangle = {false}
    />
    {#if isVolunteerHeaderOpen}
        <div class = "volunteer-body">
            {#each content.volunteer as eachVolunteer}
                <EachVolunteerBox eachVolunteer = {eachVolunteer} />
            {/each}
        </div>
    {/if}
</div>

<style>
    .volunteer{
        margin-bottom: 40px;
        width: 100%;
    }

    .volunteer-body {
        padding: 0 10px;
        margin-top: 15px;
    }
</style>