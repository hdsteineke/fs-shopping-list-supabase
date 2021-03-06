const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkamZ3c3djcWxzZnVodGVtYnVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc1NTM1ODksImV4cCI6MTk2MzEyOTU4OX0.UL14baUjdJa7Tgx9CS1Ky_ZJ78nsDmyOwDEPePPJe10';
const SUPABASE_URL = 'https://kdjfwswcqlsfuhtembua.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./other-page');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}

// function checkError({ data, error }) {
//     return error ? console.error(error) : data;
// }

export async function createItem(qty, item) {
    const response = await client
        .from('wish_list')
        .insert([{
            qty, item
        }]);
    
    return response.body;
}

export async function getListItems() {
    const response = await client
        .from('wish_list')
        .select();

    return response.body;

}

export async function obtainListItems(id) {
    const response = await client
        .from('wish_list')
        .update({ obtained: true })
        .match({ id });

    return response.body;
}

export async function deleteListItems() {
    const response = await client
        .from('wish_list')
        .delete()
        .match({
            user_id: client.auth.user().id
        });

    return response.body;
}
