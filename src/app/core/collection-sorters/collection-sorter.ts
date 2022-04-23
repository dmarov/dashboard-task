export interface CollectionSorter<T> {
    compare(a: T, b: T): number;
}
