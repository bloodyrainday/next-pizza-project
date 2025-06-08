import {
  Container,
  Title,
  Filters,
  ProductCard,
  ProductsGroupList,
} from "@/components/shared";
import { TopBar } from "@/components/shared/top-bar";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {/* <ProductCard
                id={1}
                name={"lalalaal"}
                price={200}
                imageUrl={
                  "https://media.dominos.by/__sized__/menu/product_osg_image/2025/05/21/%D0%9C%D0%B0%D0%BD%D1%85%D0%B5%D1%82%D1%82%D0%B5%D0%BD_M_480-thumbnail-480x480.png"
                }
              /> */}
              <ProductsGroupList
                title="Пиццы"
                items={[1, 2, 3, 4, 5]}
                categoryId={0}
              />
              <ProductsGroupList
                title="Комбо"
                items={[1, 2, 3, 4, 5]}
                categoryId={1}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
