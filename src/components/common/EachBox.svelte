<div class = "each-box">
    <slot></slot>
</div>

<style>
    .each-box {
        padding: 10px 10px;
        margin: 20px 0;
        display: flex;
        flex-direction: column;
        align-items: left;
        background-color: rgba(187, 137, 161, 0.2);
        border-radius: 10px;
        box-shadow: 3px 3px rgba(0, 0, 0, 0.1);
        cursor: default;
    }
</style>