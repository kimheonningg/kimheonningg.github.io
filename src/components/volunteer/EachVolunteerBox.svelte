<script>
    export let eachVolunteer;

    import { currentStatus } from "../../routes/content";
    import { eachBoxDetailsStyle, eachBoxLeftIconStyle } from "../common/styles";

    import EachBox from "../common/EachBox.svelte";
    import EachBoxBody from "../common/EachBoxBody.svelte";
    import EachBoxHeader from "../common/EachBoxHeader.svelte";
    
    import HandHeart from "svelte-material-icons/HandHeart.svelte"
    import HandHeartOutline from "svelte-material-icons/HandHeartOutline.svelte"
    import MapMarker from 'svelte-material-icons/MapMarker.svelte'
    import LinkVariant from 'svelte-material-icons/LinkVariant.svelte'
    import CalendarMonth from 'svelte-material-icons/CalendarMonth.svelte'
    import Pencil from 'svelte-material-icons/Pencil.svelte'

    let isEachVolunteerHeaderOpen = false;

    const onClickEachVolunteerHeader = () => {
        isEachVolunteerHeaderOpen = !isEachVolunteerHeaderOpen;
    }
</script>

<EachBox>
    <EachBoxHeader 
        isHeaderOpen = {isEachVolunteerHeaderOpen}
        onClickHeader = {onClickEachVolunteerHeader}
        headerIcon = {eachVolunteer.status === currentStatus.WORKING ? HandHeart : HandHeartOutline}
    >
        {eachVolunteer.role}
    </EachBoxHeader>
    {#if isEachVolunteerHeaderOpen}
        <EachBoxBody>
            <div class = "each-volunteer-details" style = {eachBoxDetailsStyle}>
                <div class = "icon" style = {eachBoxLeftIconStyle}> <MapMarker/> </div> {eachVolunteer.organization}
                {#if eachVolunteer.url}
                    <a href={eachVolunteer.url}> <LinkVariant size = "13px"/> </a>
                {/if}  
            </div>
            <div class = "each-volunteer-details" style = {eachBoxDetailsStyle}> 
                <div class = "icon" style = {eachBoxLeftIconStyle}> <CalendarMonth/> </div> {eachVolunteer.duration}  
            </div>
            {#if eachVolunteer.description}
                <div class = "each-volunteer-details" style = {eachBoxDetailsStyle}>
                    <div class = "icon" style = {eachBoxLeftIconStyle}> <Pencil/> </div> More Information: 
                </div>
                <div class = "each-volunteer-details" style = {eachBoxDetailsStyle}>
                    <div style = "margin-left: 24px"> {eachVolunteer.description} </div>
                </div>
            {/if}
        </EachBoxBody>
    {/if}
</EachBox>

<style>
</style>