<script>
    import { content, educationType } from "../../routes/content";
    import EachEducationBox from "./EachEducationBox.svelte";
    import BoxHeader from "../common/BoxHeader.svelte";
    import School from 'svelte-material-icons/School.svelte'

    let isEducationHeaderOpen = false;
    const onClickEducationHeader = () => {
        isEducationHeaderOpen = !isEducationHeaderOpen;
    }

    const officialDegreeEducationList = content.education.filter(eachEducation => eachEducation.type === educationType.OFFICIAL_DEGREE);
    const shortTermStudyEducationList = content.education.filter(eachEducation => eachEducation.type === educationType.SHORT_TERM_STUDY);
</script>

<div class = "education">
    <BoxHeader 
        headerTitle = "Education:" 
        headerIcon = {School} 
        isBoxHeaderOpen = {isEducationHeaderOpen} 
        onClickBoxHeader = {onClickEducationHeader}
        hideTriangle = {false}
    />
    {#if isEducationHeaderOpen}
        <div class = "education-body">
            <div class = "official-degree-education-body">
                <p class = "education-body-subtitle">Official Degrees:</p>
                {#each officialDegreeEducationList as eachEducation}
                    <EachEducationBox eachEducation = {eachEducation} />
                {/each}
            </div>
            <div class = "short-term-study-education-body">
                <p class = "education-body-subtitle">Short Term Studies:</p>
                {#each shortTermStudyEducationList as eachEducation}
                    <EachEducationBox eachEducation = {eachEducation} />
                {/each}
            </div>
        </div>
    {/if}
</div>

<style>
    .education {
        margin-bottom: 40px;
        width: 100%;
    }

    .education-body {
        padding: 0 10px;
        margin-top: 15px;
    }

    .education-body-subtitle {
        font-weight: 600;
        font-size: 16px;
    }

    .official-degree-education-body {
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }

    .short-term-study-education-body {
        margin-top: 15px;
    }

</style>