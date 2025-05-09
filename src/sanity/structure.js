// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('page').title('Pages'),
      S.documentTypeListItem('event').title('Event'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['event', 'page'].includes(item.getId()),
      ),
    ])
