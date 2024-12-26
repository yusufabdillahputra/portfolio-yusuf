<script setup lang="ts">
const links: any[] = [
  {
    label: "About",
    icon: "ic:outline-account-circle",
    to: "/about",
    isDownload: false,
  },
  {
    label: "Experience",
    icon: "ic:outline-work-outline",
    to: "/experience",
    isDownload: false,
  },
  {
    label: "Projects",
    icon: "ic:twotone-laptop-chromebook",
    to: "/project",
    isDownload: false,
  },
  {
    label: "Resume",
    icon: "ic:twotone-laptop-chromebook",
    to: "/resume",
    isDownload: true,
  },
];
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          v-for="link in links"
        >
          <li>
            <NuxtLink
              :class="[
                link.isDownload
                  ? `btn btn-md btn-outline btn-primary`
                  : `btn btn-sm btn-ghost`,
              ]"
              :to="link.to"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <NuxtLink to="/" class="btn btn-ghost text-xl">YAP</NuxtLink>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1" v-for="link in links">
        <li>
          <NuxtLink
            :class="[
              link.isDownload
                ? `btn btn-md btn-outline btn-primary`
                : `btn btn-sm btn-ghost`,
            ]"
            :to="link.to"
          >
            <Icon :name="link.icon" />
            <span>{{ link.label }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="navbar-end px-5">
      <ThemeToggle />
    </div>
  </div>
</template>
