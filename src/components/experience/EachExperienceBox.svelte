<script>
    export let eachExperience;

    import { currentStatus, developmentType } from "../../routes/content";
    import { eachBoxDetailsStyle, eachBoxDetailsListStyle, eachBoxLeftIconStyle, eachBoxInlineIconStyle } from "../common/styles";

    import EachBoxHeader from "../common/EachBoxHeader.svelte";
    import EachBox from "../common/EachBox.svelte";
    import ExperienceDescriptionBox from './ExperienceDescriptionBox.svelte'
    import EachBoxBody from "../common/EachBoxBody.svelte";

    import Briefcase from 'svelte-material-icons/Briefcase.svelte'
    import BriefcaseOutline from 'svelte-material-icons/BriefcaseOutline.svelte'
    import OfficeBuilding from 'svelte-material-icons/OfficeBuilding.svelte'
    import MapMarker from 'svelte-material-icons/MapMarker.svelte'
    import CalendarMonth from 'svelte-material-icons/CalendarMonth.svelte'
    import Triangle  from 'svelte-material-icons/Triangle.svelte'
    import LinkVariant from 'svelte-material-icons/LinkVariant.svelte'
    import Laptop from 'svelte-material-icons/Laptop.svelte'
    import Web from 'svelte-material-icons/Web.svelte'
    import Cellphone from 'svelte-material-icons/Cellphone.svelte'
    import Application from 'svelte-material-icons/Application.svelte'
    import Bookshelf from 'svelte-material-icons/Bookshelf.svelte'
    import Pencil from 'svelte-material-icons/Pencil.svelte'

    let isEachExperienceHeaderOpen = false;
    let isEachDescriptionOpen = false;

    const onClickEachExperienceHeader = () => {
        isEachExperienceHeaderOpen = !isEachExperienceHeaderOpen;
        isEachDescriptionOpen = false;
    }
    const onClickEachExpreienceDescription = () => {
        isEachDescriptionOpen = !isEachDescriptionOpen;
    }
</script>

<EachBox>
    <EachBoxHeader 
        isHeaderOpen = {isEachExperienceHeaderOpen}
        onClickHeader = {onClickEachExperienceHeader}
        headerIcon = {eachExperience.status === currentStatus.WORKING ? Briefcase : BriefcaseOutline}
    >
        {eachExperience.positionName}, <div style="font-size: 14px; line-height: 20px;"> {eachExperience.employmentType}</div>
    </EachBoxHeader>
    {#if isEachExperienceHeaderOpen}
        <EachBoxBody>
            <div class = "each-experience-details" style = {eachBoxDetailsStyle}>
                <div class = "icon" style = {eachBoxLeftIconStyle}> <OfficeBuilding/> </div> {eachExperience.companyNameEn}
                {#if eachExperience.companyNameKr}
                    &nbsp;[{eachExperience.companyNameKr}]
                {/if}
                {#if eachExperience.url}
                    <a href={eachExperience.url}> <LinkVariant size = "13px"/> </a>
                {/if}  
            </div>
            <div class = "each-experience-details" style = {eachBoxDetailsStyle}>
                <div class = "icon" style = {eachBoxLeftIconStyle}> <MapMarker/> </div> {eachExperience.location}  
            </div>
            <div class = "each-experience-details" style = {eachBoxDetailsStyle}> 
                <div class = "icon" style = {eachBoxLeftIconStyle}> <CalendarMonth/> </div> {eachExperience.duration}  
            </div>
            {#if eachExperience.developmentType}
                <div class = "each-experience-details" style = {eachBoxDetailsStyle}>
                    <div class = "icon" style = {eachBoxLeftIconStyle}> <Laptop/> </div>
                    {#each eachExperience.developmentType as eachDevelopmentType, index}
                        <div style = "display: flex; flex-direction: row;">
                            {#if eachDevelopmentType === developmentType.WEB}
                                Web<div class = "inline-icon" style = {eachBoxInlineIconStyle}><Web size = "10px"/></div>
                            {:else if eachDevelopmentType === developmentType.MOBILE_APPLICATION}
                                Mobile Application<div class = "inline-icon" style = {eachBoxInlineIconStyle}><Cellphone size = "10px"/></div>
                            {:else if eachDevelopmentType === developmentType.SOFTWARE}
                                Software<div class = "inline-icon" style = {eachBoxInlineIconStyle}><Application size = "10px"/></div>
                            {/if}
                            {#if  eachExperience.developmentType.length > 1 && index < eachExperience.developmentType.length - 1}
                                &nbsp;&
                            {/if}
                        </div>
                    {/each}
                    Development
                </div>
            {/if}
            {#if eachExperience.techStack}
                <div class = "each-experience-details" style = {eachBoxDetailsStyle}>
                    <div class = "icon" style = {eachBoxLeftIconStyle}> <Bookshelf/> </div> {eachExperience.techStack}
                </div>
            {/if}
            <div class = "each-experience-details-list" style = {eachBoxDetailsListStyle}>
                <div class = "each-experience-details" style = {eachBoxDetailsStyle} on:click={onClickEachExpreienceDescription}>
                    <div class = "icon" style = {eachBoxLeftIconStyle}> <Pencil/> </div> More information:
                    <div style = "margin-left: 10px" class:rotate-180={!isEachDescriptionOpen}> 
                        <Triangle height = "10px" color = "rgba(219, 61, 103, 0.5)"/> 
                    </div>
                </div>
                {#if isEachDescriptionOpen}
                    <ExperienceDescriptionBox descriptionList = {eachExperience.description}/>
                {/if}
            </div>
        </EachBoxBody>
    {/if}
</EachBox>

<style>
    .rotate-180 {
        transform: rotate(180deg);
        display: inline-block;
    }
</style>