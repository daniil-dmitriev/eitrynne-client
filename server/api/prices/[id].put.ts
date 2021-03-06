export default defineEventHandler(async (event) => {
  const id = event.context.params.id;
  const config = useRuntimeConfig();
  const body = await useBody(event);
  const response = await $fetch(`${config.API_BASE_URL}/prices/${id}`, {
    method: "put",
    body,
    headers: {
      authorization: `Bearer ${useCookies(event.req).token}`,
    },
  });
  return response;
});
