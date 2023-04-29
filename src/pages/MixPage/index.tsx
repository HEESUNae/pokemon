import React, { useEffect, useState } from "react";

// style
import { StyledMixPage } from "./style";

// store
import { useStore } from "../../api/store";

// interface
import { PokemonsInterface } from "../../api/interfaces";

// component
import { Layout } from "../../layout/Layout";
import { GnbTab } from "../../components/tab/GnbTab";
import { MixCard } from "../../components/card/MixCard";
import { ErrorContainer } from "../../containers/ErrorContainer";
import { PrimaryBtn } from "../../components/button/PrimaryBtn";
import { commonImage } from "../../consts/image";

export const MixPage: React.FC = () => {
  const [catchList, setCatchList] = useState<PokemonsInterface[]>([]);
  const [imgArr, setImgArr] = useState<string[]>([]);
  const [reulstImg, setReulstImg] = useState<string>("");
  const [resultModal, setResultModal] = useState<boolean>(false);
  const { pokemonStore } = useStore();

  const dropPokemon = (image: string) => {
    if (imgArr.length === 2) return;

    // 중복체크
    const arrConfirm = imgArr.some((img) => {
      return img === image;
    });
    if (arrConfirm) {
      alert("중복된 캐릭터는 선택할 수 없습니다.");
      return;
    }
    setImgArr((prev) => [...prev, image]);
  };

  /**
   * 몬스터 합성
   * @param pokemonIndex
   */
  const excuteMix = (pokemonIndex: number) => {
    setTimeout(() => {
      setResultModal(true);

      for (const i in imgArr) {
        const test = catchList.filter((el) => {
          return el.image === imgArr[i];
        });
        pokemonStore[test[0].id - 1].catch = 0;
      }

      setImgArr([]);
      pokemonStore[pokemonIndex].catch = 1;
      useStore.setState(() => ({ pokemonStore: pokemonStore }));
      initCatch();
    }, 1000);
  };

  /**
   *  잡은 몬스터 리스트 표출
   */
  const initCatch = () => {
    const catchMonstars = pokemonStore.filter((pokemon) => {
      return pokemon.catch === 1;
    });
    setCatchList(catchMonstars);
  };

  useEffect(() => {
    initCatch();

    if (imgArr.length === 2) {
      const randomNum = Math.floor(Math.random() * pokemonStore.length + 1);
      const pokemonIndex = randomNum - 1;

      // 합성결과 포켓몬 store 저장하기
      setReulstImg(pokemonStore[pokemonIndex].image);
      // 합성
      excuteMix(pokemonIndex);
    }
  }, [imgArr, pokemonStore, resultModal]);

  return (
    <StyledMixPage>
      <Layout>
        <div className="mix">
          <GnbTab />

          <div className="mix-container">
            <img src={imgArr[0] ? imgArr[0] : commonImage.plus} alt="" />
            <img src={imgArr[1] ? imgArr[1] : commonImage.plus} alt="" />
            <div className="mix-ment">
              <p>
                아래 몬스터 리스트에서 합성하고자 하는 몬스터를 선택하세요.
                <br />
                - 한번 합성한 몬스터는 다시 사냥해서 잡아야합니다.
                <br />- 같은 종류의 몬스터는 합성할 수 없습니다.
                <br />- 합성한 몬스터가 나올 수도 있습니다.
              </p>
            </div>
          </div>

          {resultModal ? (
            <div className="modal-layer">
              <div className="modal">
                <p>합성결과</p>
                <img src={reulstImg} alt="" />
                <PrimaryBtn title="확인" onClick={() => setResultModal(false)} />
              </div>
            </div>
          ) : null}
          <div className="catch-list-container">{catchList.length === 0 ? <ErrorContainer /> : <MixCard searchList={catchList} dropPokemon={dropPokemon} />}</div>
        </div>
      </Layout>
    </StyledMixPage>
  );
};
