<script>
    import email from '$lib/images/logo/email.svg'
    import github from '$lib/images/logo/github.svg'
    import linkedin from '$lib/images/logo/linkedin.svg'
    import instagram from '$lib/images/logo/instagram.svg'
    import { content } from '../../routes/content'
    import PhoneClassic from 'svelte-material-icons/PhoneClassic.svelte'
    import ContentCopy from 'svelte-material-icons/ContentCopy.svelte'
    import BoxHeader from '../common/BoxHeader.svelte'

    let isContactHeaderOpen = false;
    const onClickContactHeader = () => {
        isContactHeaderOpen = !isContactHeaderOpen;
    }

    const onClickCopyEmail = () => {
        navigator.clipboard.writeText(content.contact.email).then(() => {
            alert('Copied!');
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
    }
</script>

<div class="contact">
    <BoxHeader 
        headerTitle = "Contact Me Via:"
        headerIcon = {PhoneClassic}
        isBoxHeaderOpen = {isContactHeaderOpen}
        onClickBoxHeader = {onClickContactHeader}
        hideTriangle = {false}
    />
    {#if isContactHeaderOpen}
        <div class="contact-body">
            <div class="each-contact email">
                <img class="email-logo" src={email} alt="Email"/>
                {content.contact.email} <div class="copy-icon" on:click={onClickCopyEmail}><ContentCopy size="13px"/></div>
            </div>
            <div class="contact-sns-body">
                <div class="each-contact"> 
                    <a href= {content.contact.linkedIn}>
                        <img class="sns-logo" src={linkedin} alt="LinkedIn"/>
                    </a>
                </div>
                <div class="each-contact">
                    <a href={content.contact.gitHub}>
                        <img class="sns-logo" src={github} alt="GitHub"/>
                    </a>
                </div>
                <div class="each-contact">
                    <a href={content.contact.instagram}>
                        <img class="sns-logo" src={instagram} alt="Instagram"/>
                    </a>
                </div>
            </div>
        </div>
    {/if}
</div>

<style>
    .contact {
        width: 100%;
        margin-bottom: 40px;
    }

    .contact-body {
        margin-top: 10px;
    }

    .contact-sns-body {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 16%;
    }

    .each-contact {
        padding-left: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .email {
        justify-content: center;
    }

    .email-logo {
        width: 30px;
        height: 30px;
    }

    .sns-logo {
        width: 35px;
        height: 35px;
        background: #fab7d0;
        padding: 10px;
        border-radius: 10px;
    }

    .sns-logo:hover {
        background-color: #db3d67;
    }

    .copy-icon:hover {
        color: #db3d67;
    }
</style>