<template>
    <div>
        <NuxtLayout>
            <header>
                <ul>
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                        <NuxtLink to="/events">Events</NuxtLink>
                    </li>
                </ul>
            </header>
            <NuxtPage page-key="static" />
        </NuxtLayout>
    </div>
</template>