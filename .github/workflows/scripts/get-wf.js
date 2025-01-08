module.exports = async ({github, context}) => {
    const emojis = await github.request('GET /emojis')
}