<script>
    import { content } from "../../routes/content";
    
    import HammerWrench from 'svelte-material-icons/HammerWrench.svelte'
    import EachExperienceBox from "./EachExperienceBox.svelte";
    import BoxHeader from "../common/BoxHeader.svelte";

    let isExperienceHeaderOpen = false;
    const onClickExperienceHeader = () => {
        isExperienceHeaderOpen = !isExperienceHeaderOpen;
    }
</script>

<div class = "experience">
    <BoxHeader 
        headerTitle = "Experience:"
        headerIcon = {HammerWrench}
        isBoxHeaderOpen = {isExperienceHeaderOpen}
        onClickBoxHeader = {onClickExperienceHeader}
        hideTriangle = {false}
    />
    {#if isExperienceHeaderOpen}
        <div class = "experience-body">
            {#each content.experience as eachExperience}
                <EachExperienceBox eachExperience = {eachExperience} />
            {/each}
        </div>
    {/if}
</div>

<style>
    .experience{
        margin-bottom: 40px;
        width: 100%;
    }

    .experience-body {
        padding: 0 10px;
        margin-top: 15px;
    }
</style>