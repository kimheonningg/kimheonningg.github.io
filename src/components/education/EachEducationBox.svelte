<script>
    export let eachEducation;

    import { educationStatus } from "../../routes/content";
    import { eachBoxDetailsStyle, eachBoxDetailsListStyle, eachBoxLeftIconStyle } from "../common/styles";

    import EachBox from "../common/EachBox.svelte";
    import EachBoxBody from "../common/EachBoxBody.svelte";
    import EachBoxHeader from "../common/EachBoxHeader.svelte";

    import AccountSchool from 'svelte-material-icons/AccountSchool.svelte'
    import AccountSchoolOutline from 'svelte-material-icons/AccountSchoolOutline.svelte'
    import CalendarMonth from 'svelte-material-icons/CalendarMonth.svelte'
    import BookOpenVariantOutline from 'svelte-material-icons/BookOpenPageVariantOutline.svelte'
    import MapMarker from 'svelte-material-icons/MapMarker.svelte'
    import Triangle  from 'svelte-material-icons/Triangle.svelte'
    import Medal from 'svelte-material-icons/Medal.svelte'
    import AccountGroup from 'svelte-material-icons/AccountGroup.svelte'
    import AwardsAndHonorsBox from "./AwardsAndHonorsBox.svelte";
    import ActivitiesAndSocietiesBox from "./ActivitiesAndSocietiesBox.svelte";

    let isEachEducationHeaderOpen = false;
    const onClickEachEducationHeader = () => {
        isEachEducationHeaderOpen = !isEachEducationHeaderOpen;
    }

    let isEachAwardsAndHonorsOpen = false;
    const onClickEachEducationAwardsAndHonors = () => {
        isEachAwardsAndHonorsOpen = !isEachAwardsAndHonorsOpen;
    }

    let isEachActivitiesAndSocietiesOpen = false;
    const onClickEachEducationActivitiesAndSocieties = () => {
        isEachActivitiesAndSocietiesOpen = !isEachActivitiesAndSocietiesOpen;
    }
</script>

<EachBox>
    <EachBoxHeader 
        isHeaderOpen = {isEachEducationHeaderOpen}
        onClickHeader = {onClickEachEducationHeader}
        headerIcon = {eachEducation.status === educationStatus.ATTENDING ? AccountSchool : AccountSchoolOutline}
        headerUrl = {eachEducation.url}
    >
        {eachEducation.officialName + ' '} 
        <!-- {#if eachEducation.shortName}
            [ {eachEducation.shortName} ]
        {/if} -->
    </EachBoxHeader>
    {#if isEachEducationHeaderOpen}
        <EachBoxBody>
            <div class = "each-education-details" style = {eachBoxDetailsStyle}>
                <div class = "icon" style = {eachBoxLeftIconStyle}> <MapMarker/> </div> {eachEducation.location}  
            </div>
            <div class = "each-education-details" style = {eachBoxDetailsStyle}> 
                <div class = "icon" style = {eachBoxLeftIconStyle}> <CalendarMonth/> </div> {eachEducation.studyingYears}  
            </div>
            <div class = "each-education-details" style = {eachBoxDetailsStyle}> 
                <div class = "icon" style = {eachBoxLeftIconStyle}> <BookOpenVariantOutline/> </div>
                {eachEducation.level}
                {#if eachEducation.gpa}
                    (GPA: {eachEducation.gpa})
                {/if}
            </div>
            <!-- {#if eachEducation.activitiesAndSocieties}
                <div class = "each-education-details-list" style = {eachBoxDetailsListStyle}>
                    <div class = "each-education-details" style = {eachBoxDetailsStyle} on:click = {onClickEachEducationActivitiesAndSocieties} >
                        <div class = "icon" style = {eachBoxLeftIconStyle}> <AccountGroup /> </div> Activities and Societies
                        <div style = "margin-left: 10px" class:rotate-180={!isEachActivitiesAndSocietiesOpen}> 
                            <Triangle height = "10px" color = "rgba(219, 61, 103, 0.5)"/> 
                        </div>
                    </div>
                </div>
                {#if isEachActivitiesAndSocietiesOpen}
                    <ActivitiesAndSocietiesBox activitiesList = {eachEducation.activitiesAndSocieties}/>
                {/if}
            {/if} -->
            {#if eachEducation.awardsAndHonors}
                <div class = "each-education-details-list" style = {eachBoxDetailsListStyle}>
                    <div class = "each-education-details" style = {eachBoxDetailsStyle} on:click = {onClickEachEducationAwardsAndHonors} >
                        <div class = "icon" style = {eachBoxLeftIconStyle}> <Medal/> </div> Awards and Honors: 
                        <div style = "margin-left: 10px" class:rotate-180={!isEachAwardsAndHonorsOpen}> 
                            <Triangle height = "10px" color = "rgba(219, 61, 103, 0.5)"/> 
                        </div>
                    </div>
                    {#if isEachAwardsAndHonorsOpen}
                        <AwardsAndHonorsBox awardsList = {eachEducation.awardsAndHonors}/>
                    {/if}
                </div>
            {/if}
        </EachBoxBody>
    {/if}
</EachBox>

<style>
    .rotate-180 {
        transform: rotate(180deg);
        display: inline-block;
    }
</style>