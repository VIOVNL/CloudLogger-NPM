<script>
    import { onMount } from 'svelte';
    import { CloudLogger } from '@viovnl/cloudlogger';

    let clickHandler = () => {
        try {
            const logs = [
                { Name: 'Date', Value: '22-10-1994' },
                { Name: 'Country', Value: 'Netherlands' },
            ];
            CloudLogger.Log(logs);
        } catch (e) {
            console.log('error', e);
        }
    };
  onMount(() => {
      CloudLogger.Create('your_project_secret');
    });
</script>

<main>
    <h1>CloudLogger Svelte js Demo</h1>
    <div class="card">
        <button on:click={clickHandler}>Click to send log</button>
    </div>
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    .card {
        margin-top: 20px;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
