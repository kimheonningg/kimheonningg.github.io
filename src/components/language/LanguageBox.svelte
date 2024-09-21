<script>
    import { content } from "../../routes/content";

    import Chat from 'svelte-material-icons/Chat.svelte'
    import ComputerLanguageSection from "./ComputerLanguageSection.svelte";
    import BoxHeader from "../common/BoxHeader.svelte";
    import SpokenLanguageSection from './SpokenLanguageSection.svelte';
    
    let isLanguageHeaderOpen = false;
    const onClickLanguageHeader = () => {
        isLanguageHeaderOpen = !isLanguageHeaderOpen;
    }
</script>

<div class = "language">
    <BoxHeader 
        headerTitle = "Language:"
        headerIcon = {Chat}
        isBoxHeaderOpen = {isLanguageHeaderOpen}
        onClickBoxHeader = {onClickLanguageHeader}
        hideTriangle = {false}
    />
    {#if isLanguageHeaderOpen}
        <div class = "language-body">
            <SpokenLanguageSection spokenLanguage = {content.language.spokenLanguage}/>
            <ComputerLanguageSection />
        </div>
    {/if}
</div>

<style>
    .language {
        width: 100%;
        margin-bottom: 40px;
    }

    .language-body {
       
    }
</style>