<script>
    import Star from 'svelte-material-icons/Star.svelte'

    export let spokenLanguage;
</script>

<div class = "spoken-language-body">
    {#each spokenLanguage as eachSpokenLanguage}
        <div class = "each-spoken-language-details">
            <img class = "flag" src={eachSpokenLanguage.flagImg} alt={eachSpokenLanguage.typeString}/>
            <div class = "stars">
                {#each Array(5).fill(0).map((_, i) => i) as star} 
                    {#if star < eachSpokenLanguage.proficiency}
                        <Star size = "11px" color = "#f4b400"/>
                    {/if}
                {/each}
            </div>
        </div>
    {/each}
</div>

<style>
    .spoken-language-body {
        margin-top: 5px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        padding: 5px calc(16% + 20px);
    }

    .each-spoken-language-details {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .flag {
        width: 45px;
        height: 45px;
    }

    @media (max-width: 425px) { 
        .spoken-language-body {
            padding: 5px 10px;
        }
    }
</style>