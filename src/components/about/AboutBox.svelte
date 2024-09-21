<script>
    import BoxHeader from '../common/BoxHeader.svelte'
    import Information from 'svelte-material-icons/Information.svelte'

    let isAboutHeaderOpen = true;
    const onClickAboutHeader = () => {}
</script>

<div class = "about">
    <div class = "about-header">
        <BoxHeader
            headerTitle = "About This Blog:"
            headerIcon = {Information}
            isBoxHeaderOpen = {isAboutHeaderOpen}
            onClickBoxHeader = {onClickAboutHeader}
            hideTriangle = {true}
        />
    </div>
    <div class = "about-body">
        I made this blog from scratch using Svelte.
        <br/>
        This is my first time working with Svelte, and I self-taught this language by creating this blog.
        <br />
        You can find the source code for this blog at <a href = "https://github.com/kimheonningg/kimheonningg.github.io"><u>this link</u></a>.
    </div>
</div>

<style>
    .about {
        width: 100%;
    }

    .about-body {
        margin: 0 30px;
        padding: 10px;
        margin-top: 15px;
        border: 1px dashed #be7f8a;
        line-height: 24px;
        font-size: 16px;
        border-radius: 10px;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 425px) { 
        .about-body {
            margin: 0;
            margin-top: 15px;
        }
    }
</style>