<script>
    import { routes } from "./dataService";
    import FooterComponent from "./FooterComponent.svelte";
    import HeaderComponent from "./HeaderComponent.svelte";
</script>

<HeaderComponent />

<slot></slot>

<FooterComponent />
