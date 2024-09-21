<script>
    import LanguageCpp from 'svelte-material-icons/LanguageCpp.svelte'
    import LanguageJava from 'svelte-material-icons/LanguageJava.svelte'
    import LanguageJavascript from 'svelte-material-icons/LanguageJavascript.svelte'
    import LanguagePython from 'svelte-material-icons/LanguagePython.svelte'
    import LanguageR from 'svelte-material-icons/LanguageR.svelte'
    import LanguageTypescript from 'svelte-material-icons/LanguageTypescript.svelte'
</script>

<div class = "computer-language-body">
    <LanguageCpp width = "35px" height = "35px"/>
    <LanguageJava width = "35px" height = "35px"/>
    <LanguageJavascript width = "35px" height = "35px"/>
    <LanguagePython width = "35px" height = "35px"/>
    <LanguageR width = "35px" height = "35px"/>
    <!-- <LanguageTypescript width = "35px" height = "35px"/> -->
</div>

<style>
    .computer-language-body {
        margin-top: 10px;
        padding: 5px calc(16% + 20px);
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 10px;
    }
</style>