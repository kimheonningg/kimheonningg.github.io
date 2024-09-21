<script>
    export let eachOrganization;

    import { currentStatus } from "../../routes/content";
    import { eachBoxDetailsStyle, eachBoxLeftIconStyle } from "../common/styles";

    import EachBox from "../common/EachBox.svelte";
    import EachBoxBody from "../common/EachBoxBody.svelte";
    import EachBoxHeader from "../common/EachBoxHeader.svelte";

    import AccountGroup from "svelte-material-icons/AccountGroup.svelte"
    import AccountGroupOutline from "svelte-material-icons/AccountGroupOutline.svelte"
    import AccountHardHat from 'svelte-material-icons/AccountHardHat.svelte'
    import CalendarMonth from 'svelte-material-icons/CalendarMonth.svelte'

    let isEachOrganizationHeaderOpen = false;

    const onClickEachOrganizationHeader = () => {
        isEachOrganizationHeaderOpen = !isEachOrganizationHeaderOpen;
    }
</script>

<EachBox>
    <EachBoxHeader 
        isHeaderOpen = {isEachOrganizationHeaderOpen}
        onClickHeader = {onClickEachOrganizationHeader}
        headerIcon = {eachOrganization.status === currentStatus.WORKING ? AccountGroup : AccountGroupOutline}
        headerUrl = {eachOrganization.url ? eachOrganization.url : null}
    >
        {eachOrganization.name}
    </EachBoxHeader>
    {#if isEachOrganizationHeaderOpen}
        <EachBoxBody>
            <div class = "each-organization-details" style = {eachBoxDetailsStyle}>
                <div class = "icon" style = {eachBoxLeftIconStyle}> <AccountHardHat /> </div> {eachOrganization.position}
                
            </div>
            <div class = "each-organization-details" style = {eachBoxDetailsStyle}> 
                <div class = "icon" style = {eachBoxLeftIconStyle}> <CalendarMonth /> </div> {eachOrganization.duration}  
            </div>
        </EachBoxBody>
    {/if}
</EachBox>

<style>
</style>